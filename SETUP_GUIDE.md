# Setup guide (Sveltekit + SMUI7 + pnpm) (2023-SEP-03)

## create sveltekit project
reference: 
- https://kit.svelte.dev/docs/creating-a-project

```bash
# npm
npm create svelte@latest sveltekit-smui
cd sveltekit-smui
npm install

# pnpm
pnpm create svelte@latest sveltekit-smui
cd sveltekit-smui
pnpm install
```

## In order to use pnpm with SMUI, need to install @material packages manually
reference:
- https://github.com/hperrin/svelte-material-ui/issues/348
- https://m2.material.io/develop/web/getting-started
- https://m2.material.io/components
- https://github.com/material-components/material-components-web/tree/v14.0.0/packages/material-components-web

```bash
# install all in one go
pnpm i -D material-components-web
```
Or you can install sibling packages one by one
```bash
pnpm i -D @material/dom

pnpm i -D @material/animation 
pnpm i -D @material/base 
pnpm i -D @material/button 
pnpm i -D @material/density 
pnpm i -D @material/dialog 
pnpm i -D @material/drawer 
pnpm i -D @material/elevation 
pnpm i -D @material/focus-ring 
pnpm i -D @material/icon-button 
pnpm i -D @material/list 
pnpm i -D @material/ripple 
pnpm i -D @material/rtl 
pnpm i -D @material/shape 
pnpm i -D @material/theme 
pnpm i -D @material/tokens 
pnpm i -D @material/top-app-bar 
pnpm i -D @material/touch-target 
pnpm i -D @material/typography
pnpm i -D @material/checkbox
pnpm i -D @material/chips
pnpm i -D @material/form-field
pnpm i -D @material/fab/mdc-fab
pnpm i -D @material/select
pnpm i -D @material/floating-label
pnpm i -D @material/notched-outline
pnpm i -D @material/line-ripple
pnpm i -D @material/menu
pnpm i -D @material/menu-surface
pnpm i -D @material/switch
pnpm i -D @material/textfield
pnpm i -D @smui/paper
pnpm i -D @material/tooltip
```

## install SMUI
reference: 
- https://sveltematerialui.com/SVELTEKIT.md
- https://pnpm.io/pnpm-cli
- https://pnpm.io/feature-comparison

```bash
# install theme

# npm
npm install --save-dev smui-theme
npx smui-theme template src/theme


# pnpm
pnpm install --save-dev smui-theme
pnpm dlx smui-theme template src/theme
```

## Add to package.json
```
# for npm
"prepare": "npm smui-theme-light && pnpm smui-theme-dark",
"smui-theme-light": "smui-theme compile static/smui.css -i src/theme",
"smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"

# for pnpm
"prepare": "pnpm smui-theme-light && pnpm smui-theme-dark",
"smui-theme-light": "smui-theme compile static/smui.css -i src/theme -i ./node_modules",
"smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark -i ./node_modules"

```

## Add to src/app.html head section
```html
<!-- Hint where we get fonts from. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Material Icons, Roboto, and Roboto Mono fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Icons&Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>

<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link
  rel="stylesheet"
  href="/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

## playwright install browsers
reference:
- https://github.com/microsoft/playwright#manually
```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

## Run npm/pnpm install
reference: 
- https://github.com/pnpm/pnpm/issues/4203#issuecomment-1013128909
```bash
# npm
npm install

# pnpm
# please check with the pnpm issue
pnpm i -g pnpm

pnpm install
```

## Can optionally install SMUI packages
```bash
pnpm i -D @smui-extra/accordion
pnpm i -D @smui/button
pnpm i -D @smui/fab
pnpm i -D @smui/icon-button
pnpm i -D @smui-extra/bottom-app-bar
pnpm i -D @smui/top-app-bar
pnpm i -D @smui-extra/badge
pnpm i -D @smui/banner
pnpm i -D @smui/card
pnpm i -D @smui/common
pnpm i -D @smui/data-table
pnpm i -D @smui/dialog
pnpm i -D @smui/drawer
pnpm i -D @material/elevation@^14.0.0
pnpm i -D @smui/image-list
pnpm i -D @smui-extra/autocomplete
pnpm i -D @smui/checkbox
pnpm i -D @smui/chips
pnpm i -D @smui/form-field
pnpm i -D @smui/radio
pnpm i -D @smui/segmented-button
pnpm i -D @smui/select
pnpm i -D @smui/slider
pnpm i -D @smui/switch
pnpm i -D @smui/textfield
pnpm i -D @smui/layout-grid
pnpm i -D @smui/list
pnpm i -D @smui/menu-surface
pnpm i -D @smui/menu
pnpm i -D @smui/paper
pnpm i -D @smui/circular-progress
pnpm i -D @smui/linear-progress
pnpm i -D @smui/ripple
pnpm i -D @smui/snackbar
pnpm i -D @smui/tab @smui/tab-bar
pnpm i -D @smui/tooltip
pnpm i -D @smui/touch-target
pnpm i -D @material/typography@^14.0.0
```

## SMUI Premade themes
reference: 
- https://github.com/hperrin/svelte-material-ui/blob/master/INSTALL.md#a-premade-theme
- https://github.com/hperrin/svelte-material-ui/tree/master/packages/site/src/theme

```bash
# via npm / pnpm
pnpm i -D svelte-material-ui

<link
  rel="stylesheet"
  href="node_modules/svelte-material-ui/themes/svelte.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="node_modules/svelte-material-ui/themes/svelte-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```
```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte.min.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte-dark.min.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

## How to change theme and toggle light/dark mode like SMUI page
reference:
- (demo) https://sveltematerialui.com/
- (guide) https://mvolkmann.github.io/blog/svelte/svelte-material-ui/?v=1.0.19


## Run in dev mode
```bash
pnpm run dev -- --open
```
