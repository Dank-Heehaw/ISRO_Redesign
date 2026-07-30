import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://isro-redesign.vercel.app');
  const missions = (await getCollection('missions')).sort((a, b) => a.data.order - b.data.order);

  const feedItems = missions
    .map((mission) => {
      const link = new URL(`/missions/${mission.id}/`, site).href;
      const date = mission.data.launchDate ?? new Date('2020-01-01T00:00:00Z');
      return `    <item>
      <title><![CDATA[${mission.data.name} (${mission.data.status})]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${date.toUTCString()}</pubDate>
      <description><![CDATA[${mission.data.summary}]]></description>
      <category>${mission.data.category}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ISRO Redesign: Missions</title>
    <link>${new URL('/missions/', site).href}</link>
    <description>Unofficial concept feed of mission profiles in the ISRO website redesign demonstrator. Not an official ISRO feed.</description>
    <language>en-IN</language>
    <atom:link href="${new URL('/rss/missions.xml', site).href}" rel="self" type="application/rss+xml"/>
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
