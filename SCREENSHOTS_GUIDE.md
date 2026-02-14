# Adding Screenshots to Your Portfolio

## Quick Setup

1. **Create an images folder** in the same directory as your HTML files:
   ```
   portfolio/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── images/          ← Create this folder
   │   ├── project1/
   │   ├── project2/
   │   └── ...
   └── README.md
   ```

2. **Add your project screenshots** to the appropriate folders:
   ```
   images/
   ├── project1/
   │   ├── architecture.png
   │   ├── screenshot1.png
   │   └── results.png
   ├── project2/
   │   ├── architecture.png
   │   └── demo.png
   └── ...
   ```

## How to Update Screenshots in Code

Open `script.js` and find the screenshot section in each project's detail. Replace the placeholder divs with actual images:

### Before (Placeholder):
```javascript
<div class="screenshot-item">
    <div class="screenshot-placeholder">Architecture Diagram</div>
    <p class="screenshot-caption">Add your architecture diagram here</p>
</div>
```

### After (With Image):
```javascript
<div class="screenshot-item">
    <img src="images/project1/architecture.png" alt="Architecture Diagram" style="width: 100%; border-radius: 8px;">
    <p class="screenshot-caption">System Architecture</p>
</div>
```

## Recommended Screenshot Types

For each project, consider including:

1. **Architecture Diagram** - System design and component flow
2. **UI Screenshots** - Main application interface
3. **Results/Metrics** - Performance graphs, accuracy charts
4. **Workflow Diagrams** - Data pipeline or process flow
5. **Code Snippets** - Key implementation highlights (optional)

## Screenshot Best Practices

- **Size**: Keep images under 500KB for fast loading
- **Format**: Use PNG for diagrams/UI, JPG for photos
- **Dimensions**: Recommended 1200x800px or similar aspect ratio
- **Quality**: High resolution but compressed
- **Tools**: Use tools like TinyPNG or ImageOptim to compress

## Example: Full Image Implementation

In `script.js`, replace the screenshot section with:

```javascript
<div class="project-detail-section">
    <h3>Screenshots & Visuals</h3>
    <div class="screenshot-grid">
        <div class="screenshot-item">
            <img src="images/project1/architecture.png" alt="Architecture" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);">
            <p class="screenshot-caption">System Architecture</p>
        </div>
        <div class="screenshot-item">
            <img src="images/project1/dashboard.png" alt="Dashboard" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);">
            <p class="screenshot-caption">Data Dashboard</p>
        </div>
        <div class="screenshot-item">
            <img src="images/project1/results.png" alt="Results" style="width: 100%; border-radius: 8px; border: 1px solid var(--border);">
            <p class="screenshot-caption">Performance Metrics</p>
        </div>
    </div>
</div>
```

## Alternative: Use GitHub Images

If you don't want to maintain an images folder locally, you can link directly to images in your GitHub repositories:

```javascript
<img src="https://raw.githubusercontent.com/Chanura04/project-name/main/screenshots/demo.png" alt="Demo">
```

## Creating Architecture Diagrams

If you don't have diagrams yet, you can create them using:

- **Draw.io** (free): https://app.diagrams.net/
- **Lucidchart** (free tier): https://www.lucidchart.com/
- **Excalidraw** (free): https://excalidraw.com/
- **Figma** (free): https://www.figma.com/

## Need Help?

If you need help:
1. Take screenshots of your running applications
2. Use online tools to create diagrams
3. Export charts/graphs from your notebooks
4. Commit images to your GitHub repo
5. Update the paths in `script.js`

Your portfolio will look much more professional with real project visuals!
