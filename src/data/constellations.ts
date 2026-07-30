/**
 * Constellation snapshots for EO, GEO communications, and navigation.
 * Indicative for this concept redesign; not an official ISRO status board.
 */

export interface ConstellationSat {
  name: string;
  series?: string;
  status: 'active' | 'limited' | 'defunct' | 'failed' | 'planned';
  note?: string;
}

export interface ConstellationGroup {
  id: string;
  title: string;
  blurb: string;
  dataPortals: { label: string; href: string }[];
  satellites: ConstellationSat[];
}

export const constellations: ConstellationGroup[] = [
  {
    id: 'navic',
    title: 'NavIC (navigation)',
    blurb:
      'Regional PNT constellation. Designed for seven spacecraft; mid-2026 public reporting lists three providing full PNT, with NVS replenishment planned.',
    dataPortals: [
      { label: 'NavIC programme (isro.gov.in)', href: 'https://www.isro.gov.in/IRNSS_Programme.html' },
      { label: 'Mission profile', href: '/missions/navic' },
    ],
    satellites: [
      { name: 'IRNSS-1B', status: 'active', note: 'PNT' },
      { name: 'IRNSS-1I', status: 'active', note: 'PNT' },
      { name: 'NVS-01', status: 'active', note: '2nd gen, L1 + L5/S' },
      { name: 'IRNSS-1A / 1C / 1E / 1F / 1G', status: 'limited', note: 'Messaging or degraded clocks' },
      { name: 'IRNSS-1D', status: 'defunct', note: 'Decommissioned' },
      { name: 'IRNSS-1H', status: 'failed', note: '2017 launch anomaly' },
      { name: 'NVS-02', status: 'failed', note: '2025 propulsion failure' },
      { name: 'NVS-03 / 04 / 05', status: 'planned', note: 'Replenishment path' },
    ],
  },
  {
    id: 'eo',
    title: 'Earth observation',
    blurb:
      'Optical, microwave and oceanographic spacecraft that feed Bhuvan, Bhoonidhi, MOSDAC and disaster-response products. Series names below are the public face of a much larger archive.',
    dataPortals: [
      { label: 'Bhuvan', href: 'https://bhuvan.nrsc.gov.in' },
      { label: 'Bhoonidhi', href: 'https://bhoonidhi.nrsc.gov.in' },
      { label: 'MOSDAC', href: 'https://mosdac.gov.in' },
      { label: 'VEDAS', href: 'https://vedas.sac.gov.in' },
    ],
    satellites: [
      { name: 'Cartosat-2 / 2A / 2B / 2C / 2D / 2E / 2F', series: 'Cartosat', status: 'active', note: 'High-res mapping (mixed ages)' },
      { name: 'Cartosat-3', series: 'Cartosat', status: 'active', note: 'Sub-metre class imaging' },
      { name: 'Resourcesat-2 / 2A', series: 'Resourcesat', status: 'active', note: 'Multispectral resource monitoring' },
      { name: 'Oceansat-3 (EOS-06)', series: 'Oceansat', status: 'active', note: 'Ocean colour & scatterometry' },
      { name: 'EOS-04 (RISAT-1A)', series: 'RISAT', status: 'active', note: 'C-band SAR' },
      { name: 'EOS-01 (RISAT-2BR2)', series: 'RISAT', status: 'active', note: 'X-band SAR' },
      { name: 'NISAR', series: 'NISAR', status: 'active', note: 'NASA–ISRO L- & S-band SAR' },
      { name: 'INSAT-3D / 3DR', series: 'INSAT met', status: 'active', note: 'Imager & sounder (GEO meteorology)' },
    ],
  },
  {
    id: 'geo',
    title: 'GEO communications & meteorology',
    blurb:
      'Geostationary assets for television, telecom, VSAT, and weather. INSAT and GSAT / CMS naming both appear in public materials; statuses change as spacecraft age out and replacements fly.',
    dataPortals: [
      { label: 'MOSDAC (met & ocean)', href: 'https://mosdac.gov.in' },
      { label: 'ISRO spacecraft directory', href: 'https://www.isro.gov.in/SpacecraftMissions.html' },
    ],
    satellites: [
      { name: 'GSAT-30', series: 'GSAT', status: 'active', note: 'C / Ku communications' },
      { name: 'CMS-01', series: 'CMS', status: 'active', note: 'C-band replacement capacity' },
      { name: 'GSAT-24', series: 'GSAT', status: 'active', note: 'Ku-band (NSIL commercial)' },
      { name: 'INSAT-3DS', series: 'INSAT', status: 'active', note: 'Advanced meteorological mission' },
      { name: 'GSAT-31 / GSAT-29 / GSAT-11', series: 'GSAT', status: 'active', note: 'High-throughput / multi-band fleet (mixed)' },
      { name: 'Older INSAT / GSAT units', series: 'Legacy', status: 'limited', note: 'Several past design life or retired' },
    ],
  },
];
