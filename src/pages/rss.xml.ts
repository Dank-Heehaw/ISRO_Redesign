import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://isro-redesign.vercel.app');
  const items = (await getCollection('news'))
    .filter((n) => n.data.type === 'press' || n.data.type === 'launch' || n.data.type === 'science')
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const feedItems = items
    .map((item) => {
      const link = new URL(`/newsroom/${item.id}/`, site).href;
      return `    <item>
      <title><![CDATA[${item.data.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${item.data.date.toUTCString()}</pubDate>
      <description><![CDATA[${item.data.summary}]]></description>
      <category>${item.data.type}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ISRO Redesign: Press &amp; updates</title>
    <link>${new URL('/newsroom/', site).href}</link>
    <description>Unofficial concept feed of press, launch and science updates from the ISRO website redesign demonstrator. Not an official ISRO feed.</description>
    <language>en-IN</language>
    <atom:link href="${new URL('/rss.xml', site).href}" rel="self" type="application/rss+xml"/>
${feedItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600',
    },
  });
}
