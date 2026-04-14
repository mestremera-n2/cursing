# Assets Contract

`assets/` is the canonical source of reusable, exact implementations.

## Purpose

- Store absolute visual/runtime primitives (JSX, SVG, CSS, etc.) that should be reused verbatim.
- Prevent future generation from guessing geometry, colors, animation timings, or structural markup.

## Rules

1. Treat files in `assets/` as immutable source-of-truth unless a user explicitly requests a change.
2. Prefer importing from `assets/` over re-implementing equivalent visuals in app pages/components.
3. Specs in `specs/` should orchestrate behavior/layout/routing and reference assets for concrete visuals.
4. If a visual behavior must be exact across apps, create/update an asset bundle first, then point app code/specs to it.
5. When exact parity is required, copy asset files verbatim and preserve exported token defaults.

## Current Exact Bundles

- `cosmic-squirrel/`
  - `COSMIC_SQUIRREL_EXACT.jsx`
  - `cosmic-squirrel.css`
- `disco-ball-chain-spark/`
  - `CHAIN_SPARK_DISCO_BALL_EXACT.jsx`

## Integration Pattern

- App/component imports concrete implementation from `assets/...`.
- `app.yaml` and/or `specs/...` reference the asset path as the source for that visual primitive.
- Behavioral constraints (when to show, state transitions, triggers) remain in specs.
