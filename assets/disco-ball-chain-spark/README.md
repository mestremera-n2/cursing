# Chain Spark Disco Ball Exact Bundle

Canonical, non-YAML implementation for the top-nav chain spark disco ball icon.

## Files

- `CHAIN_SPARK_DISCO_BALL_EXACT.jsx`
  - Exact SVG structure for chain + cap + disco orb + sparkle
  - Exported `ChainSparkDiscoBallIcon` component
  - Exported `CHAIN_SPARK_DISCO_BALL_TOKENS` default values
- `DISCO_SPARKLE_FIELD_EXACT.jsx`
  - Deterministic full-viewport sparkle emitter tied to disco-button hover
  - Exported `DiscoSparkleField` component
  - Exported `DISCO_SPARKLE_FIELD_SPEC` constants
- `disco-sparkle-field.css`
  - Exact shape + keyframe primitives for dot/cross/crescent particles

## Reuse Contract

To recreate exactly in another app:

1. Copy `CHAIN_SPARK_DISCO_BALL_EXACT.jsx`.
2. Copy `DISCO_SPARKLE_FIELD_EXACT.jsx`.
3. Copy `disco-sparkle-field.css`.
4. Import sparkle CSS once in app entry.
5. Render `ChainSparkDiscoBallIcon` with default token values.
6. Render `DiscoSparkleField` using `active` and `anchorRef` from disco button hover.
7. Do not modify SVG geometry or sparkle emission constants if exact parity is required.
