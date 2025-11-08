# BaseLoading Component

A simple loading component for Astro applications with View Transitions support. Automatically shows a loading indicator during page navigation.

## Features

- 🔄 Automatic show/hide during Astro page transitions
- 🎨 Customizable styling via CSS classes
- 🎯 Custom content support via slots
- ⚡ Built-in spinner animation
- 🧹 Automatic cleanup on navigation

## Installation

Place `BaseLoading.astro` in your `src/components/` directory.

## Usage

### Basic Usage

```astro
---
import BaseLoading from "../components/BaseLoading.astro";
---

<BaseLoading />
```

### With Custom Delay

```astro
<BaseLoading timeDuration={300} />
```

### With Custom Content

```astro
<BaseLoading>
  <div class="my-spinner">Loading...</div>
</BaseLoading>
```

### With Custom Classes

```astro
<BaseLoading
  baseLoadingClassName="my-loading"
  baseBgOverLayClassName="my-overlay"
  baseContentClassName="my-content"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | `true` | Initial visibility (component controls display automatically via JS) |
| `text` | `string` | `"Loading..."` | Text label (currently unused in component) |
| `timeDuration` | `number` | - | Delay in milliseconds before showing loader (defaults to 500ms in script) |
| `baseLoadingClassName` | `string` | - | Additional CSS class for the loading container |
| `baseBgOverLayClassName` | `string` | - | Additional CSS class for the background overlay |
| `baseContentClassName` | `string` | - | Additional CSS class for the content container |

## How It Works

1. Listens to `astro:before-preparation` event to show loader after a delay
2. Listens to `astro:page-load` event to hide loader when page is ready
3. Automatically cleans up timeouts on navigation and unload
4. Uses a global timeout to prevent orphaned loaders on rapid navigation

## Requirements

- Astro 5.x
- View Transitions enabled (for automatic page transition detection)

## Notes

- The component uses `position: fixed` and covers the entire viewport
- Background overlay has `pointer-events: none` to allow interaction when needed
- Custom content via slot will replace the default SVG spinner


## use

<video src="./video.mov" controls></video>