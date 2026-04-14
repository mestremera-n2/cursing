# Cosmic Squirrel Exact Bundle

This folder is the canonical, non-YAML implementation for the cosmic squirrel cursor.

## Files

- `COSMIC_SQUIRREL_EXACT.jsx`
  - Exact variant metadata
  - Exact preview style tokens
  - Exact global cursor style tokens
  - Exact React render code for the cosmic squirrel shape
  - Exact pointer tracking and coarse-pointer disable behavior
- `cosmic-squirrel.css`
  - Required keyframes used by the JSX implementation

## Reuse Contract

To recreate cosmic squirrel exactly in another app:

1. Copy `COSMIC_SQUIRREL_EXACT.jsx`.
2. Include `cosmic-squirrel.css` in global styles.
3. Render `CosmicSquirrelGlobalCursor` for global cursor behavior.
4. Render `CosmicSquirrelPreview` for local preview surfaces.

Do not alter constants in `COSMIC_SQUIRREL_*` exports if exact reproduction is required.
