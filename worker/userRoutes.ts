import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Note: In a real production environment, we'd import the posts array.
    // Since we're in a worker, we'll provide a minimalist XML generator.
    app.get('/api/sitemap', (c) => {
        const baseUrl = new URL(c.req.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc></url>
  <url><loc>${baseUrl}/blog</loc></url>
  <url><loc>${baseUrl}/about</loc></url>
</urlset>`;
        return c.text(xml, 200, { 'Content-Type': 'application/xml' });
    });
    app.get('/api/rss', (c) => {
        const baseUrl = new URL(c.req.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>WildPath - The Adventurer's Log</title>
  <link>${baseUrl}</link>
  <description>Minimalist outdoor storytelling</description>
  <item>
    <title>Sample Adventure</title>
    <link>${baseUrl}/blog/silent-peaks-patagonia</link>
    <description>Solitude in the granite heart of Patagonia.</description>
  </item>
</channel>
</rss>`;
        return c.text(xml, 200, { 'Content-Type': 'application/xml' });
    });
}