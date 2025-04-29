# Methodical Cloud

Welcome to the source repository for [methodicalcloud.com](https://methodicalcloud.com) — a content-driven, visually clean, and automation-focused static site built with [Hugo](https://gohugo.io/).

## 🧠 What is Methodical Cloud?

Methodical Cloud is a platform dedicated to clarity in automation, visual system design, and sustainable technical storytelling.  
The site hosts blog posts, diagrams, and a podcast — all crafted around simplifying complex systems and workflows.

## ✨ Key Features

- Hugo static site generator (no JS frameworks, no fluff)
- Clean, custom styling inspired by HTML5 UP's **Massively** theme
- Responsive design with mobile support
- Markdown-powered content (`/blog`, `/about`, `/podcast`, `/contact`)
- Dark/light visual layering for clarity and flow
- Deployed on [Netlify](https://www.netlify.com/)

## 🔧 Project Structure

```
.
├── config.toml              # Site-wide settings and navigation
├── content/                 # Markdown content pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   └── podcast/
├── layouts/                 # Hugo templates (baseof, list, single, partials)
├── static/                  # Static files (CSS, JS, images)
├── netlify.toml             # Netlify deployment configuration
```

## 🧪 Local Development

Install Hugo: <https://gohugo.io/getting-started/install/>

Then:

```bash
hugo server
```

Visit: [http://localhost:1313](http://localhost:1313)

## 🚀 Deployment

Automatic deployment is handled via Netlify.  
Pushing to the `main` branch will trigger a build and deploy to [methodicalcloud.com](https://methodicalcloud.com).

## 🔗 Credits

Originally styled after [HTML5 UP's Massively](https://html5up.net/massively)  
Built and maintained by [@mrlesmithjr](https://github.com/mrlesmithjr)
