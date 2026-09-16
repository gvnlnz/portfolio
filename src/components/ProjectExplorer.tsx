import { useCallback, useEffect, useMemo, useState } from 'react';

export type Project = {
  key: string;
  file: string;
  folder: string;
  tech: string;
  year: string;
  stars?: number;
  repo?: string;
  title: string;
  body: string;
  tags: string[];
};

type Strings = {
  explorer: string;
  foot1: string;
  foot2: string;
  repo: string;
  next: string;
  viewGrid: string;
  viewTree: string;
};

export default function ProjectExplorer({ projects, strings }: { projects: Project[]; strings: Strings }) {
  const [activeKey, setActiveKey] = useState(projects[0]?.key ?? '');
  const [tabs, setTabs] = useState<string[]>(() => projects.slice(0, 2).map((p) => p.key));
  const [view, setView] = useState<'tree' | 'grid'>('tree');

  const byKey = useMemo(() => new Map(projects.map((p) => [p.key, p])), [projects]);

  const folders = useMemo(() => {
    const m = new Map<string, Project[]>();
    for (const p of projects) m.set(p.folder, [...(m.get(p.folder) ?? []), p]);
    return [...m.entries()];
  }, [projects]);

  const open = useCallback(
    (key: string, pushHash = true) => {
      if (!byKey.has(key)) return;
      setActiveKey(key);
      setTabs((ts) => (ts.includes(key) ? ts : [...ts, key]));
      if (pushHash) history.replaceState(null, '', '#projects/' + key);
    },
    [byKey]
  );

  useEffect(() => {
    const fromHash = () => {
      const m = location.hash.match(/^#projects\/(.+)$/);
      if (m) open(decodeURIComponent(m[1]), false);
    };
    fromHash();
    const onOpen = (e: Event) => open((e as CustomEvent<string>).detail);
    window.addEventListener('hashchange', fromHash);
    window.addEventListener('portfolio:open-file', onOpen as EventListener);
    return () => {
      window.removeEventListener('hashchange', fromHash);
      window.removeEventListener('portfolio:open-file', onOpen as EventListener);
    };
  }, [open]);

  const active = byKey.get(activeKey) ?? projects[0];

  const closeTab = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTabs((ts) => {
      const next = ts.filter((t) => t !== key);
      const kept = next.length ? next : [projects[0].key];
      if (activeKey === key) setActiveKey(kept[kept.length - 1]);
      return kept;
    });
  };

  const next = () => {
    const i = projects.findIndex((p) => p.key === activeKey);
    open(projects[(i + 1) % projects.length].key);
  };

  if (!active) return null;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <button
          className="btn btn-secondary"
          type="button"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 11px' }}
          onClick={() => setView((v) => (v === 'tree' ? 'grid' : 'tree'))}
        >
          {view === 'tree' ? strings.viewGrid : strings.viewTree}
        </button>
      </div>

      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
          {projects.map((p) => (
            <article key={p.key} className="card elev-sm" style={{ padding: 18, gap: 9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--color-accent)' }}>{p.file}</span>
                <span className="mono dim-2" style={{ fontSize: 10.5 }}>{p.year}</span>
              </div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-body" style={{ lineHeight: 1.62 }}>{p.body}</p>
              <ul className="tagrow" style={{ margin: 0 }}>
                {p.tags.map((t) => <li key={t} className="tag tag-neutral">{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="explorer">
          <aside>
            <p className="explorer-label">{strings.explorer}</p>
            <div className="tree">
              <div className="tree-root"><span style={{ color: 'var(--color-accent)' }}>▾</span><span>lorenzo-gaviani</span></div>
              {folders.map(([folder, items]) => (
                <div key={folder}>
                  <div className="tree-folder"><span>▾</span><span>{folder}/</span></div>
                  {items.map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      className="tree-file"
                      aria-current={p.key === activeKey}
                      onClick={() => open(p.key)}
                    >
                      <span className="dot" aria-hidden="true" />
                      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.file}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className="tree-foot"><div>{strings.foot1}</div><div>{strings.foot2}</div></div>
          </aside>

          <div className="editor">
            <div className="tabbar" role="tablist">
              {tabs.map((key) => {
                const p = byKey.get(key);
                if (!p) return null;
                return (
                  <button
                    key={key}
                    role="tab"
                    type="button"
                    className="tab"
                    aria-selected={key === activeKey}
                    onClick={() => open(key)}
                  >
                    <span>{p.file}</span>
                    <span className="tab-x" role="button" aria-label={'close ' + p.file} onClick={(e) => closeTab(key, e)}>×</span>
                  </button>
                );
              })}
            </div>

            <div className="editor-body">
              <p className="crumb">lorenzo-gaviani › {active.folder} › {active.file}</p>
              <div className="editor-meta">
                <span className="tag tag-accent">{active.tech}</span>
                <span className="mono dim-2" style={{ fontSize: 11 }}>{active.year}</span>
                {active.stars ? <span className="mono dim-2" style={{ fontSize: 11 }}>★ {active.stars}</span> : null}
              </div>
              <h3>{active.title}</h3>
              <p className="prose" style={{ marginBottom: 20 }}>{active.body}</p>
              <ul className="tagrow">
                {active.tags.map((t) => <li key={t} className="tag tag-neutral">{t}</li>)}
              </ul>
              <div className="editor-actions">
                {active.repo && (
                  <a className="btn btn-primary" href={active.repo} target="_blank" rel="noreferrer">{strings.repo}</a>
                )}
                <button className="btn btn-secondary" type="button" onClick={next}>{strings.next}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
