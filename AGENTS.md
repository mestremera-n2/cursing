# AGENTS.md

This file defines how agents should structure and build this project.

## Operating Model

Treat this repo as a source-driven app scaffold.

The agent's job is to:

1. Create and maintain the project source-of-truth structure
2. Place new app information in the correct source file or folder
3. Build the runnable app from that source of truth into `app/`

If the user says "build this app", "scaffold the project", or makes a similar high-level request, start by reading `app.yaml`.

## Project Structure

Ensure this root-level structure exists:

- `app.yaml`
- `config/`
- `specs/shared/`
- `specs/pages/`
- `assets/`
- `app/`

Create missing directories with:

```bash
mkdir -p config specs/shared specs/pages assets app
```

Folder roles:

- `app.yaml`: the app composition file; explains how the major pieces fit together
- `config/`: reusable values, settings, tokens, copy, themes, and app-wide configuration
- `specs/shared/`: shared UI, behavior, layout, and interaction specs
- `specs/pages/`: page-level or route-level specs
- `assets/`: canonical visual or runtime asset implementations referenced by the app
- `app/`: generated runnable output only

## Source Of Truth

The source of truth is:

- `app.yaml`
- `config/*`
- `specs/shared/*`
- `specs/pages/*`
- `assets/*` when assets are part of the app contract

Do not treat files in `app/` as the source of truth.

Do not directly edit generated files in `app/` to implement behavioral or UI changes unless the user explicitly asks for that.

## Read Order

Use this order when understanding or building the app:

1. `app.yaml`
2. Referenced files in `config/`
3. Referenced files in `specs/shared/`
4. Referenced files in `specs/pages/`
5. Referenced files in `assets/`

`app.yaml` should give the agent a strong understanding of how the app fits together before reading lower-level files.

## Information Routing

When the user provides new information, place it in the correct layer:

- App structure, composition, routes, page inventory, major feature relationships, delivery requirements: `app.yaml`
- Reusable settings, design tokens, copy, colors, themes, labels, defaults, shared configuration values: `config/`
- Reusable interaction patterns, shared layout rules, shared component behavior, shared form behavior, navigation behavior: `specs/shared/`
- A specific screen, route, page flow, or page-specific UI/behavior: `specs/pages/`
- A concrete visual implementation, asset file, animation asset, cursor asset, icon asset, or canonical runtime primitive: `assets/`
- Built application code: `app/`

If the user describes something that spans layers, update the composition in `app.yaml` first, then update the supporting source files.

## Build Behavior

When asked to scaffold or build the app:

1. Ensure the project structure exists
2. Read `app.yaml`
3. Read the referenced source files
4. Create or update the source-of-truth files needed to reflect the requested app
5. Generate or regenerate the runnable app in `app/`
6. Run the required verification for the app contract

Do not stop at partial source edits if the request is to build the app.

## Regeneration Rules

- Treat current source-of-truth files as canonical on every build
- For generated files in `app/`, prefer replacement from current source-of-truth inputs over patching old generated internals
- Do not reuse stale implementation details that are no longer justified by source-of-truth files
- If generated output changes, the change should be explainable by source-of-truth changes

## Agent Standards

- Do not guess when required app structure or behavior is unspecified
- Keep implementations deterministic from the same source inputs
- Keep command output concise and focused on validation evidence
- Fail clearly when required source-of-truth information is missing or contradictory
