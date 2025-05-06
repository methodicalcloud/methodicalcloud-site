# Methodical Cloud Website

This repository contains the configuration and content for the Methodical Cloud site managed via [Vercel v0](https://v0.dev), a content-driven platform focused on automation, clarity, and systems thinking.

## About Methodical Cloud

Methodical Cloud delivers automation wisdom, deep technical clarity, and architectural insight through diagrams, short-form content, and podcast storytelling—building systems and mindsets that scale.

## Project Structure

This site is now powered by Vercel v0, a generative UI editor and site builder.

The structure is auto-managed by Vercel and changes dynamically based on the site's design and content. Markdown content and static assets are still stored in this repo and synced through GitHub integration.

Content folders:

- `content/` - Markdown content for blog posts and pages
- `public/` - Static assets like logos and images

## Content Types

The website features several types of content:

1. **Blog Posts** - Written content on automation, system design, and DevOps
2. **Podcast Episodes** - "Diagram the Damn Thing" podcast episodes
3. **Diagrams** - Visual representations of systems and processes in the "Flow Crimes" archive

## Development

### Optional Local Development

If you choose to work locally:

- Node.js 18+
- npm or yarn

1. Clone the repository:

   ```bash
   git clone https://github.com/methodicalcloud/methodicalcloud-site.git
   cd methodicalcloud-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000)

## Deployment

The site is built and deployed through Vercel v0 using GitHub integration. Changes pushed to the main branch trigger a rebuild and deployment automatically.

## License

All content is copyright © Methodical Cloud. All rights reserved.

## Contact

For questions or inquiries, please contact [info@methodicalcloud.com](mailto:info@methodicalcloud.com).
