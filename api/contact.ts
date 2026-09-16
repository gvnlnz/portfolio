// Vercel serverless function. Not available on GitHub Pages —
// if you deploy there, drop the form and keep the mailto: link.
// Env: RESEND_API_KEY, CONTACT_TO

const WINDOW_MS = 60_000;
const MAX = 3;
const hits = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 100;
const MESSAGE_MAX = 3000;
const ALLOWED_ORIGINS = new Set(['https://lorenzogaviani.it', 'https://www.lorenzogaviani.it']);

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX;
}

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const origin = req.headers.get('origin');
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return new Response('Forbidden', { status: 403 });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return new Response('Too many requests', { status: 429 });

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const { name = '', email = '', message = '', website = '' } = body;
  if (website) return new Response(null, { status: 204 }); // honeypot

  const trimmedName = name.trim();
  const trimmedMessage = message.trim();
  if (
    !trimmedName || trimmedName.length > NAME_MAX ||
    !EMAIL_RE.test(email) ||
    trimmedMessage.length < 10 || trimmedMessage.length > MESSAGE_MAX
  ) {
    return new Response('Invalid input', { status: 422 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + process.env.RESEND_API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from: 'portfolio@lorenzogaviani.it',
      to: process.env.CONTACT_TO,
      reply_to: email,
      subject: 'Portfolio — ' + trimmedName,
      text: trimmedMessage + '\n\n---\n' + trimmedName + ' <' + email + '>'
    })
  });

  return new Response(null, { status: res.ok ? 204 : 502 });
}
