# Deployment Guide

This guide covers deploying the AI Pattern Library to GitHub Pages or GitLab Pages.

## GitHub Pages Deployment

### Prerequisites
- A GitHub account
- Your repository pushed to GitHub

### Steps

#### 1. Configure the Site URL

The `astro.config.mjs` is already configured with:
```javascript
site: 'https://arjundg.github.io',
base: '/ai-pattern-library',
```

This is correct for your repository!

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/arjundg/ai-pattern-library`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (Don't select "Deploy from a branch" — we're using Actions)

#### 3. Push to Deploy

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured. Simply push to the `main` branch:

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

#### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)

#### 5. Access Your Site

Once deployed, your site will be available at:
```
https://arjundg.github.io/ai-pattern-library/
```

### Troubleshooting GitHub Pages

**"404 Not Found" errors:**
- Verify the `base` in `astro.config.mjs` matches your repository name
- Check that GitHub Pages is enabled in Settings → Pages
- Wait a few minutes for DNS propagation

**Workflow fails:**
- Check the Actions tab for error details
- Ensure `package.json` and `package-lock.json` are committed
- Verify Node version (should be 20)

---

## GitLab Pages Deployment

### Prerequisites
- A GitLab account
- Your repository pushed to GitLab

### Steps

#### 1. Update astro.config.mjs

For GitLab Pages, update your `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://arjundg.gitlab.io',  // Change to your GitLab username
  base: '/ai-pattern-library',
  integrations: [mdx()],
  // ... rest of config
});
```

#### 2. Create .gitlab-ci.yml

Create a file named `.gitlab-ci.yml` in the root directory:

```yaml
image: node:20

pages:
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run build
    - cp -r dist public
  artifacts:
    paths:
      - public
  only:
    - main
```

#### 3. Push to Deploy

```bash
git add .gitlab-ci.yml astro.config.mjs
git commit -m "Configure GitLab Pages deployment"
git push origin main
```

#### 4. Monitor Deployment

1. Go to **CI/CD** → **Pipelines** in your GitLab repository
2. Watch the pipeline run
3. Once it succeeds, Pages will be deployed

#### 5. Access Your Site

Your site will be available at:
```
https://arjundg.gitlab.io/ai-pattern-library/
```

### Troubleshooting GitLab Pages

**Pipeline fails:**
- Check the pipeline logs in CI/CD → Pipelines
- Ensure `.gitlab-ci.yml` is in the root directory
- Verify `npm run build` works locally

**404 errors:**
- Confirm the `base` path matches your project name
- Check that artifacts are being created in `public/` directory

---

## Custom Domain (Optional)

### For GitHub Pages:

1. Add a `CNAME` file to the `public/` directory:
   ```
   www.yourpatterns.com
   ```

2. Update `astro.config.mjs`:
   ```javascript
   site: 'https://www.yourpatterns.com',
   base: '/',  // Remove base path for root domain
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `arjundg.github.io`
   - Or use A records for apex domain (see [GitHub DNS docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

### For GitLab Pages:

1. Go to **Settings** → **Pages** in your GitLab project
2. Click **+ New Domain**
3. Enter your domain and follow DNS configuration instructions
4. Update `astro.config.mjs` with your custom domain

---

## Local Testing Before Deployment

Always test the production build locally first:

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4321/ai-pattern-library/` to verify everything works.

---

## Continuous Deployment

Both platforms support automatic deployment:

- **GitHub**: Every push to `main` triggers deployment via GitHub Actions
- **GitLab**: Every push to `main` triggers deployment via GitLab CI/CD

To trigger manual deployment:
- **GitHub**: Go to Actions → "Deploy to GitHub Pages" → "Run workflow"
- **GitLab**: Go to CI/CD → Pipelines → "Run pipeline"

---

## Next Steps

After successful deployment:

1. ✅ Update the README.md with your live site URL
2. ✅ Test all pattern pages and interactive playgrounds
3. ✅ Verify search and filtering work
4. ✅ Check Mermaid diagrams render correctly
5. ✅ Test on mobile devices
6. ✅ Share your site!

Need help? Check the [GitHub Pages docs](https://docs.github.com/en/pages) or [GitLab Pages docs](https://docs.gitlab.com/ee/user/project/pages/).
