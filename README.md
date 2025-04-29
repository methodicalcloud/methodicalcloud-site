# methodicalcloud-site

# Methodical Cloud

This is the source code for the [Methodical Cloud](https://methodicalcloud.netlify.app/) website, built with [Hugo](https://gohugo.io/) and deployed via [Netlify](https://www.netlify.com/).

## Overview

Methodical Cloud focuses on automation clarity, visual system design, and building workflows that don't suck.  
This site hosts our blog, podcast, and informational content to help IT and engineering professionals navigate complex environments intentionally.

## Structure

- `content/`: Markdown files for Home, About, Blog, Podcast, Contact, and blog posts.
- `layouts/`: Hugo templates (home page, single pages, list pages, partials).
- `static/`: Assets including CSS, JavaScript, and images from the HTML5UP Massively theme.
- `netlify.toml`: Netlify deployment configuration.

## Local Development

1. Install Hugo (if not already installed):
   ```bash
   brew install hugo
   ```

2. Start a local server:
   ```bash
   hugo server -D
   ```

3. Open your browser at `http://localhost:1313/`

## Deployment

- Every commit to the `main` branch auto-deploys via Netlify.
- Production URL: https://methodicalcloud.netlify.app/
- (Eventually will map to https://methodicalcloud.com/)

## License

Content and design are © Methodical Cloud. Theme assets originally adapted from [HTML5UP Massively](https://html5up.net/massively).