/**
 * The ISRO site spreads roughly ninety destinations across mega-menus, portal
 * strips and footer accordions. This collapses them into five clusters; the
 * `built` flag marks what exists in this demonstrator versus what is documented
 * in SITEMAP.md but intentionally out of scope.
 */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  built?: boolean;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  href: string;
  blurb: string;
  links: NavLink[];
}

export const primaryNav: NavGroup[] = [
  {
    label: 'Missions',
    href: '/missions',
    blurb: 'Every vehicle, spacecraft and destination in the Indian programme.',
    links: [
      { label: 'All Missions', href: '/missions', built: true },
      { label: 'Constellations', href: '/missions/constellations', built: true },
      { label: 'Launch Vehicles', href: '/launch-vehicles', built: true },
      { label: 'Human Spaceflight', href: '/missions?category=human' },
      { label: 'Planetary Exploration', href: '/missions?category=planetary' },
      { label: 'Earth Observation', href: '/missions?category=earth' },
      { label: 'Navigation (NavIC)', href: '/missions?category=navigation' },
    ],
  },
  {
    label: 'Science',
    href: '/science',
    blurb: 'Findings, instruments and the open data behind them.',
    links: [
      { label: 'Space Science', href: '/science/space' },
      { label: 'Earth Science', href: '/science/earth' },
      { label: 'Microgravity Research', href: '/science/microgravity' },
      { label: 'Bhuvan (Geoplatform)', href: 'https://bhuvan.nrsc.gov.in', external: true },
      { label: 'MOSDAC (Met & Ocean)', href: 'https://mosdac.gov.in', external: true },
      { label: 'ISSDC (Science Data)', href: 'https://issdc.gov.in', external: true },
    ],
  },
  {
    label: 'Newsroom',
    href: '/newsroom',
    blurb: 'Launch updates, press releases and imagery.',
    links: [
      { label: 'Latest', href: '/newsroom', built: true },
      { label: 'Press Releases', href: '/newsroom?type=press' },
      { label: 'Launch Updates', href: '/newsroom?type=launch' },
      { label: 'Image Gallery', href: '/newsroom/gallery' },
      { label: 'Media Kit', href: '/newsroom/media-kit' },
      { label: 'RSS feeds', href: '/rss.xml' },
    ],
  },
  {
    label: 'Organisation',
    href: '/about',
    blurb: 'Who builds it, and where.',
    links: [
      { label: 'About this redesign', href: '/about', built: true },
      { label: 'Centres & Units', href: '/about/centres' },
      { label: 'Autonomous Bodies', href: '/about/autonomous-bodies' },
      { label: 'IN-SPACe', href: 'https://www.inspace.gov.in', external: true },
      { label: 'NSIL', href: 'https://www.nsilindia.co.in', external: true },
      { label: 'Brand & Credits', href: '/brand', built: true },
    ],
  },
  {
    label: 'Connect',
    href: '/connect',
    blurb: 'Work with us, learn with us, supply to us.',
    links: [
      { label: 'Careers', href: '/connect/careers' },
      { label: 'Students (YUVIKA & START)', href: '/connect/students' },
      { label: 'Tenders', href: '/connect/tenders' },
      { label: 'Ask an Expert', href: '/connect/ask' },
      { label: 'Contact', href: '/connect/contact' },
    ],
  },
];

export const footerMeta: NavLink[] = [
  { label: 'Website Policy', href: '/policy' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'RTI', href: '/rti' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'RSS', href: '/rss.xml' },
];

export const socialLinks: NavLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/isro.dos', external: true },
  { label: 'X', href: 'https://x.com/isro', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@isroofficial5866', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/isro', external: true },
];
