
# How to Publish a Next.js Site to GitHub Pages - Outdated (Switched to GH Actions)

## 1. Prerequisites

- The repository must be **public** for GitHub Pages to work.
- Install `gh-pages` as a dev dependency:

  ```sh
  npm install --save-dev gh-pages
  ```

- In your `next.config.js`, add:

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    // ...other config options
  };
  module.exports = nextConfig;
  ```

- In your `package.json` scripts, include:

  ```json
  "build": "next build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
  ```

## 2. Build Your Static Site

Run:

```sh
npm run build
```

This will generate the static site in the `out` folder.

## 3. Deploy to GitHub Pages

Run:

```sh
npm run deploy
```

This will publish the contents of the `out` folder to the `gh-pages` branch.

## 4. Configure GitHub Pages

- Go to your repository on GitHub.
- Click **Settings** > **Pages**.
- Set the source to the `gh-pages` branch and `/ (root)` folder.
- Save and wait a few minutes for deployment.

## 5. View Your Site

- Visit your published site at `https://<your-username>.github.io/<repo-name>/`

## Notes

- Do **not** make your repo private; GitHub Pages only works for public repositories.
- You do **not** need to merge the `gh-pages` branch into `main`.
- To deploy to `https://<your-username>.github.io/` (without a subfolder), place your Next.js project at the root of your repository.

---

For troubleshooting, see the official [Next.js static export documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).
