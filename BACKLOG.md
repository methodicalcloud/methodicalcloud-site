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
