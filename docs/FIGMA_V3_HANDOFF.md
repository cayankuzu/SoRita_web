# SoRita Web V3 — Figma Handoff

Target file: [SoRita Web](https://www.figma.com/design/BjnG5i0nnGQHrCzCbPYaHZ/sorita_web?node-id=7-325)

## Final page structure

1. `00 — Cover / Overview`
2. `01 — Foundations`
3. `02 — Components`
4. `03 — Desktop · 1440`
5. `04 — Tablet · 1024 / 768`
6. `05 — Mobile · 390 / Responsive`
7. `06 — QA / Handoff`

All rejected V2, archive, and previous-system pages were removed from the Figma file.

## Responsive screen coverage

- 15 source-defined web route/state screens
- Desktop 1440: 15 frames
- Tablet 1024: 15 frames
- Tablet 768: 15 frames
- Mobile 390: 15 frames
- Total responsive screen frames: 60
- Programmatic text-overflow findings after QA: 0

The screen matrix is:

1. Landing — Default
2. Download — Default
3. List Handoff — Preparing
4. List Handoff — Valid
5. List Handoff — Missing `listId`
6. Auth Callback — Opening
7. Reset Password — Opening
8. Story — Redirecting
9. Legacy Link — Analyzing
10. Legacy List — Valid
11. Unknown Link — Not Found
12. Privacy Policy — Default
13. KVKK — Default
14. Child Safety — Default
15. Terms of Use — Default

Primary node references:

- Desktop landing: `77:2`
- Desktop download: `108:74`
- Desktop utility states: `108:171` through `108:518`
- Desktop legal screens: `108:563`, `108:638`, `108:713`, `108:782`
- Tablet 1024 landing: `84:2`
- Tablet 768 landing: `84:84`
- Mobile 390 landing: `80:2`
- Cover: `88:2`
- Landing QA: `90:8`
- Complete screen coverage QA: `117:2`

The public landing flow is intentionally limited to:

`Navbar → source-locked hero → clickable authentic mockup → compact footer`

## Interaction

- The mockup rotates through three authentic published screens: Home → Explore → Profile.
- Desktop has a dedicated hover variant with a light focus border/elevation.
- Clicking the mockup opens the supplied Figma Make URL.
- Store badges open the verified App Store and Google Play listings.
- Header `İndir` opens the current public download gateway.
- Footer links use the real legal routes in this repository.
- Source-defined handoff continuity is prototyped: List Preparing → Valid → download fallback, Story Redirecting → Download, and Legacy Analyzing → Valid → download fallback.
- Utility cards open the verified public route or the source-defined `sorita://` custom scheme.

## Source boundaries

- Runtime values remain explicit placeholders: `{listId}`, optional `{placeId}`, and `{pathname}`.
- No user, list, place, profile, support, account-deletion, login, or registration data was invented.
- The web source contains no reset-password form, success, expired, or error view; it only hands off to the native app, so speculative web states were not added.
- The four legal screens contain all source sections: Privacy 9, KVKK 9, Child Safety 7, Terms 9.

## Design system counts

- 181 local variables
  - 94 color variables
  - 50 metric variables
  - 37 typography variables
- 17 text styles
- 5 effect styles
- 9 grid styles
- 15 exact-source Lucide icons documented
- 89 master components
- 8 component sets
  - Button
  - Desktop authentic mock showcase
  - Mobile authentic mock showcase
  - Official store badge
  - Progress spinner
  - Gateway state card
  - Download card
  - Legal section card

## Known handoff constraint

The supplied Figma Make URL works as the design/prototype target, but anonymous access could not be guaranteed during verification. Before implementing it as a public website CTA, enable “Anyone with the link” access or replace it with another published demo URL.
