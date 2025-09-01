# GitHub CLI Deployment Instructions

Since GitHub CLI is not currently installed, here are the complete instructions to deploy using GitHub CLI as specified in the prompt:

## Install GitHub CLI

### Option 1: Using winget (Recommended for Windows)
```powershell
winget install --id GitHub.cli
```

### Option 2: Download from GitHub
Download from: https://cli.github.com/

## After Installation, Authenticate
```bash
gh auth login
```

## Deploy the Repository (Following prompt specifications)

### 1. Create GitHub Repository with GitHub CLI
```bash
# Navigate to project directory
cd kids-gaming-site

# Create repository matching local folder name
gh repo create kids-gaming-site --public --license MIT --source=. --push
```

### 2. Configure GitHub Pages
```bash
# Set homepage URL (if GH CLI supports Pages API)
gh repo edit kids-gaming-site --homepage "https://hereandnowai.github.io/kids-gaming-site"
```

### 3. Push changes (if needed)
```bash
git push -u origin main
```

### 4. Open repository in browser
```bash
gh repo view kids-gaming-site --web
```

## Expected Results

**Repository created and pushed:**
```
https://github.com/hereandnowai/kids-gaming-site
```

**Site deployed at:**
```
https://hereandnowai.github.io/kids-gaming-site
```
*(Allow a few minutes to go live)*

## Manual Alternative (if GitHub CLI fails)

1. **Create repository manually** at https://github.com/new
   - Name: `kids-gaming-site`
   - Public repository
   - Add MIT license

2. **Push code**:
   ```bash
   git remote add origin https://github.com/hereandnowai/kids-gaming-site.git
   git push -u origin main
   ```

3. **Enable Pages**: Go to repository Settings → Pages → select `main` branch

The automated GitHub Actions workflow will handle deployment to GitHub Pages.
