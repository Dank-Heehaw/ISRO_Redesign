---
name: NavIC
shortName: NavIC
category: navigation
status: operational
destination: Regional Geosynchronous Constellation
summary: >-
  India's regional navigation constellation (formerly IRNSS). Designed for seven
  spacecraft; as of mid-2026 only three provide full PNT, with replenishment underway.
accent: '#17c26a'
order: 6
stats:
  - label: PNT active
    value: 3 satellites
  - label: Coverage design
    value: India +1500 km
  - label: Accuracy (design)
    value: '<20 m'
  - label: Signals
    value: L5, S, L1
dataLinks:
  - label: NavIC overview (isro.gov.in)
    href: https://www.isro.gov.in/IRNSS_Programme.html
  - label: ISRO press releases
    href: https://www.isro.gov.in/update.html
---

NavIC (Navigation with Indian Constellation), originally IRNSS, is meant to give
India an independent regional Positioning, Navigation and Timing service without
depending on a foreign global constellation. The design baseline is seven
satellites in geosynchronous and geostationary orbits, broadcasting a civil
standard service and a restricted service for authorised users. Second-generation
NVS spacecraft add an L1 signal so consumer chipsets can use NavIC more easily.

### Active vs limited / defunct (indicative, mid-2026)

Public reporting and parliamentary answers describe a thin PNT core and a larger
set of spacecraft that are limited, failed, or past mission life. Treat this as
a concept snapshot; always confirm against ISRO for operational use.

**Providing PNT (positioning):** IRNSS-1B, IRNSS-1I, NVS-01.

**Messaging / limited or past full PNT:** IRNSS-1A, IRNSS-1C, IRNSS-1E, IRNSS-1F,
IRNSS-1G (several clock failures; some still support one-way messaging).

**Failed to reach useful orbit / lost:** IRNSS-1H (heat-shield separation failure,
2017), NVS-02 (propulsion failure after launch, 2025; stranded in transfer orbit).

**Decommissioned:** IRNSS-1D.

A minimum of four healthy PNT satellites is needed for standalone 3D positioning.
With three, NavIC cannot currently deliver full independent PNT; ISRO has
signalled NVS-03 through NVS-05 as the replenishment path over the following
15–18 months. This page is an unofficial summary for the redesign, not a status
board for aviation or defence users.
