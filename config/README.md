# Config Purpose

`config/` contains app-wide configuration values used by specs and generated app code.

## What belongs here

- Design tokens (spacing, typography, radius, shadows)
- Color system values
- Shared copy/text content
- Generation/runtime behavior settings

## What does not belong here

- Exact visual implementation code (put that in `assets/`)
- Route/page layout contracts (put that in `specs/`)

## Relationship to other folders

- `config/`: parameter values and defaults
- `specs/`: behavior/layout/routing contracts
- `assets/`: canonical exact implementations for reusable visuals/components

Together, `config + specs + assets` are the source-of-truth for regeneration.
