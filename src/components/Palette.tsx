import { Command } from 'cmdk';
import { useEffect, useRef, useState } from 'react';
import { sectionIds, type SectionId } from '../data/site';
import type { Locale } from '../i18n/ui';

type FileRef = { key: string; file: string; tech: string };

type Strings = {
  placeholder: string;
  empty: string;
  section: string;
  file: string;
  action: string;
  jump: string;
  open: string;
  lang: string;
  theme: string;
  copy: string;
  cv: string;
  sections: Record<SectionId, string>;
};

declare global {
  interface Window {
    __theme?: { get: () => string; set: (t: string) => void; toggle: () => void };
  }
}

export default function Palette({
  other,
  files,
  strings,
  email,
  cv
}: {
  locale: Locale;
  other: Locale;
  files: FileRef[];
  strings: Strings;
  email: string;
  cv: string;
}) {
  const [open, setOpen] = useState(false);
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onRequest = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('portfolio:palette', onRequest);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('portfolio:palette', onRequest);
    };
  }, []);

  useEffect(() => {
    if (open) {
      restoreTo.current = document.activeElement as HTMLElement;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      restoreTo.current?.focus?.();
    }
  }, [open]);

  if (!open) return null;

  const run = (fn: () => void) => () => {
    setOpen(false);
    fn();
  };

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 76, behavior: 'smooth' });
  };

  return (
    <div className="pal-backdrop" role="presentation" onClick={() => setOpen(false)}>
      <Command className="pal" label={strings.placeholder} onClick={(e) => e.stopPropagation()}>
        <div className="pal-top">
          <span className="mono" style={{ fontSize: 12, color: 'var(--color-accent)' }} aria-hidden="true">&gt;</span>
          <Command.Input autoFocus placeholder={strings.placeholder} />
          <span className="pal-esc" aria-hidden="true">ESC</span>
        </div>
        <Command.List>
          <Command.Empty>{strings.empty}</Command.Empty>

          <Command.Group>
            {sectionIds.map((id) => (
              <Command.Item
                key={id}
                value={`${strings.jump} ${strings.sections[id]} ${id}`}
                onSelect={run(() => jump(id))}
              >
                <span className="kind">{strings.section}</span>
                <span className="lbl">{strings.jump} {strings.sections[id]}</span>
                <span className="hint">#{id}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group>
            {files.map((file) => (
              <Command.Item
                key={file.key}
                value={`${strings.open} ${file.file} ${file.tech}`}
                onSelect={run(() => {
                  window.dispatchEvent(new CustomEvent('portfolio:open-file', { detail: file.key }));
                  jump('projects');
                })}
              >
                <span className="kind">{strings.file}</span>
                <span className="lbl">{strings.open} {file.file}</span>
                <span className="hint">{file.tech}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group>
            <Command.Item value={strings.lang} onSelect={run(() => { location.href = `/${other}/`; })}>
              <span className="kind">{strings.action}</span>
              <span className="lbl">{strings.lang}</span>
              <span className="hint">{other.toUpperCase()}</span>
            </Command.Item>
            <Command.Item value={strings.theme} onSelect={run(() => window.__theme?.toggle())}>
              <span className="kind">{strings.action}</span>
              <span className="lbl">{strings.theme}</span>
              <span className="hint">⇄</span>
            </Command.Item>
            <Command.Item value={`${strings.copy} ${email}`} onSelect={run(() => window.dispatchEvent(new Event('portfolio:copy-email')))}>
              <span className="kind">{strings.action}</span>
              <span className="lbl">{strings.copy}</span>
              <span className="hint">@gmail</span>
            </Command.Item>
            <Command.Item value={strings.cv} onSelect={run(() => { const a = document.createElement('a'); a.href = cv; a.download = ''; a.click(); })}>
              <span className="kind">{strings.action}</span>
              <span className="lbl">{strings.cv}</span>
              <span className="hint">pdf</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
