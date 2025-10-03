# Methodical Cloud Website - Feature Backlog

## Deferred Features

### Merch Store

**Status**: Deferred
**Removed from navigation**: October 3, 2025
**Location**: Code exists at `app/merch/`

**Description**:
Merchandise store for Methodical Cloud branded items (t-shirts, stickers, mugs, laptop stickers, etc.)

**Why deferred**:

- Focus on content and product development first (FinInsights beta launch Oct 24)
- Merch requires inventory management and fulfillment infrastructure
- Lower priority than core content initiatives (blog, podcast, diagrams)
- Need to establish brand presence before merch makes sense

**Implementation when ready**:

1. Re-add to header navigation in `components/header.tsx`
2. Re-add to footer navigation in `components/footer.tsx`
3. Update existing page at `app/merch/` with actual products
4. Set up print-on-demand integration (Printful, Printify, or similar)
5. Configure payment processing (Stripe, etc.)

**Notes**:

- Page still exists but is not linked in navigation
- Can be accessed directly at <https://methodicalcloud.com/merch>
- Consider starting with simple items: stickers, t-shirts, mugs
- Potential taglines: "Automation, clarity, and systems that don't suck"
- Could tie merch to podcast/content (diagram-themed items)

**Estimated effort**: 2-4 hours (with print-on-demand service)

---

### Podcast

**Status**: Deferred
**Removed from navigation**: October 3, 2025
**Location**: Code exists at `app/podcast/`

**Description**:
"Diagram the Damn Thing" podcast featuring 15-minute episodes anchored around diagrams and architectural concepts, hosted by Larry Smith Jr.

**Why deferred**:

- Focus on written content and product development first (FinInsights beta launch Oct 24)
- Podcast requires audio production, editing, and hosting infrastructure
- All 5 planned episodes currently show "coming soon" status
- Lower priority than core content initiatives (blog posts, product launch)
- Need to establish consistent content cadence before adding audio format

**Implementation when ready**:

1. Record and edit first 3-5 episodes
2. Set up podcast hosting (Spotify for Podcasters, etc.)
3. Generate RSS feed for podcast directories
4. Re-add to header navigation in `components/header.tsx`
5. Re-add to footer navigation in `components/footer.tsx`
6. Update existing page at `app/podcast/` with actual episode audio
7. Submit to Apple Podcasts, Spotify, Google Podcasts

**Notes**:

- Page still exists but is not linked in navigation
- Can be accessed directly at <https://methodicalcloud.com/podcast>
- 5 episodes planned with topics covering automation, CI/CD, infrastructure
- Episodes should be 15 minutes or less
- Each episode should reference a diagram or visual aid

**Estimated effort**: 4-8 hours per episode (recording, editing, publishing)

---

### Diagrams

**Status**: Deferred
**Removed from navigation**: October 3, 2025
**Location**: Code exists at `app/diagrams/`

**Description**:
Visual diagram gallery featuring flowcharts, automation visuals, and layered architecture diagrams with clear labels and minimalist design.

**Why deferred**:

- Focus on written blog content first
- All 4 planned diagrams currently use placeholder.svg images
- Need actual diagram content before linking from navigation
- Diagrams should accompany blog posts and podcast episodes
- Lower priority than core content initiatives

**Implementation when ready**:

1. Create actual diagrams using Excalidraw, Draw.io, or similar tools
2. Export diagrams as high-quality PNG/SVG images
3. Replace placeholder images in `app/diagrams/` with actual content
4. Re-add to header navigation in `components/header.tsx`
5. Re-add to footer navigation in `components/footer.tsx`
6. Consider adding diagram download functionality
7. Add diagram search/filtering functionality

**Notes**:

- Page still exists but is not linked in navigation
- Can be accessed directly at <https://methodicalcloud.com/diagrams>
- 4 diagram placeholders: CI/CD Pipeline Flow, Kubernetes Architecture, Event-Driven Systems, Microservices Communication
- Diagrams should follow brand color palette (blues, grays)
- Each diagram should have accompanying blog post or podcast episode

**Estimated effort**: 2-3 hours per diagram (design, export, integration)

---

### Archives

**Status**: Deferred / Broken Link
**Removed from navigation**: October 3, 2025
**Location**: No route exists (broken link)

**Description**:
Archive page for browsing historical blog posts by date (year/month structure).

**Why deferred**:

- Route `/archives` does not exist in codebase
- Blog content is recent (all from 2025)
- Not enough historical content to warrant archive view yet
- Topics and tag filtering already available for blog navigation
- Lower priority than creating new content

**Implementation when ready**:

1. Create `app/archives/` directory with page.tsx
2. Group blog posts by year and month
3. Display chronological listing with post counts
4. Add route to site navigation structure
5. Re-add to footer navigation in `components/footer.tsx` (if needed)
6. Consider year/month dynamic routes (e.g., `/archives/2025/10`)

**Notes**:

- Link previously existed in footer but pointed to non-existent route
- May not be necessary if Topics page provides sufficient navigation
- Consider alternative: RSS feed for archive access
- Could combine with search functionality when implemented

**Estimated effort**: 3-4 hours (route creation, listing logic, styling)

---

## Future Features

### Enhanced Blog Features

- Comment system (Disqus, utterances, or custom)
- Newsletter subscription integration
- Related posts suggestions
- Reading time estimates

### Podcast Enhancements

- Embedded audio player on website
- Episode transcripts
- Show notes with timestamps
- RSS feed optimization

### Diagram Gallery

- Interactive diagram viewer
- Diagram templates download
- User-submitted diagrams section
- Searchable diagram library

### Products Section

- Dedicated landing pages for each product
- Feature comparison charts
- Customer testimonials
- Case studies

### SEO Improvements

- Automated sitemap generation
- OpenGraph image generation
- Schema.org markup
- Performance optimization (Core Web Vitals)

---

## Ideas for Future Content

- Technical deep-dives (architecture diagrams)
- Behind-the-scenes of building FinInsights
- Interview series with automation experts
- Monthly automation tips roundup

---

**Last Updated**: October 3, 2025
**Maintained By**: Larry Smith Jr.
