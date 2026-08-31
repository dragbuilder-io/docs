/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// Header.astro imports several of Starlight's own components via their
// "virtual:starlight/components/*" specifiers (so it keeps picking up
// this repo's own ThemeSelect.astro/LanguageSelect.astro overrides
// automatically instead of hardcoding paths) — the ambient declarations
// for those live in virtual-internal.d.ts, which isn't exposed through
// Starlight's public `types` entry, only used by Starlight's own build.
// `astro check` only sees types reachable from src/, so without this
// reference it can't resolve the module and fails the build. Same fix
// orbit-docs (the design-system's own docs site) needed for the same
// reason.
/// <reference path="../node_modules/@astrojs/starlight/virtual-internal.d.ts" />
