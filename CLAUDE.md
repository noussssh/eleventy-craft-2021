# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run build    # Build static site to _site/
npm run watch    # Development with auto-rebuild on file changes
npm run debug    # Build with verbose debug output
```

## Architecture

This is an Eleventy (11ty) v0.12.1 static site for Craft Interactive, an ERPNext partner in Dubai. The site uses Nunjucks templating with Bootstrap 4.5 frontend.

### Content Structure

- **`_data/`** - Dynamic data (e.g., `customers.js` exports array of client logos)
- **`_includes/`** - Nunjucks layouts and partials (`base.njk`, `header.njk`, `footer.njk`, `blogs.njk`, `casestudies.njk`)
- **`blog/`** - Markdown blog posts with YAML frontmatter
- **`case-studies/`** - Markdown case studies
- **`services/`** - Service page templates (`.njk`)
- **`assets/`** - Static files passed through to build (CSS, JS, images, fonts)

### Frontmatter Pattern

Blog posts and case studies use YAML frontmatter:
```yaml
---
title: Post Title
layout: blogs.njk
tags: blogs
posted: 2021-01-15
image: /assets/img/blog/image.jpg
---
```

### Data Files

Files in `_data/` are automatically available in templates. Example: `customers.js` exports an array accessible as `{{ customers }}` in Nunjucks.

### Build Output

Static site builds to `_site/` (gitignored). The `.eleventy.js` config passes through the `/assets` directory unchanged.

## Key Technologies

- **Eleventy 0.12.1** - Static site generator
- **Nunjucks** - Templating (`.njk` files)
- **Bootstrap 4.5** - CSS framework
- **jQuery 3.5** - DOM manipulation
- **Luxon** - Date formatting in templates
- **Pageclip** - Form submissions (demo request forms)

## Node Version

Node 8 specified in `.nvmrc` (legacy project).
