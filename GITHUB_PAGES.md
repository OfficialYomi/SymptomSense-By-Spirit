# Deploying SymptomSense to GitHub Pages

This project is fully configured to be hosted on **GitHub Pages** using GitHub Actions! When you push this code to a GitHub repository, it will automatically build and publish your website online.

Follow these simple steps to set it up:

---

## 1. Create a GitHub Repository & Push Your Code

1. Go to [github.com](https://github.com) and create a **new public repository** (e.g., named `symptomsense`).
2. Open your terminal in this project folder and run these commands to push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit with github pages deployment configuration"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```
   *(Be sure to replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.)*

---

## 2. Configure GitHub Pages Settings

Once your code is pushed:

1. On GitHub, navigate to your repository's **Settings** tab.
2. Under the left-hand menu, click on **Pages** (within the "Code and automation" section).
3. In the **Build and deployment** section:
   - For **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").

---

## 3. View Your Live Website Link!

1. Once you select **GitHub Actions**, click on the **Actions** tab at the top of your repository.
2. You will see a workflow running named `Deploy to GitHub Pages`.
3. Wait about 1–2 minutes for the workflow to complete (it will turn green with a checkmark).
4. Click on the completed run. You will find the live link to your hosted website right there, under the deployment status!
5. Your live URL will look like:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

---

## How It Works Behind the Scenes
- **Vite Configuration (`vite.config.ts`)**: We added `base: './'` to configure all built assets (JavaScript, CSS, images) with relative paths. This ensures they load correctly regardless of whether your site is on a root domain or a repository subpath.
- **GitHub Workflow (`.github/workflows/deploy.yml`)**: We set up a GitHub Action that automatically installs dependencies, runs `npm run build`, and securely publishes the output folder (`dist/`) directly to GitHub Pages on every single push.
