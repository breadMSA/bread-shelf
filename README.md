# Bread's Shelf

GitHub Pages reader + visual author workspace.

## Reader features

- Persistent continue-reading position, a visible progress bar, chapter TOC, previous/next chapter navigation.
- Bookmarks are visible in a dedicated list and return to the recorded position.
- Reader settings: font size, line spacing, typeface, and four colour themes.
- Choice blocks have per-choice follow-up text and can reveal conditional passages. They are not decorative buttons.

## Visual author workspace

Open `/#/bread`. In local preview the starter passphrase is `change-me`.

The workspace is deliberately visual: write in content blocks, insert images, add quotes, dividers, and choice branches; drag blocks or use arrows to reorder them; add/reorder/delete chapters; add/delete stories; preview the reader at any time. A JSON backup exists only as an emergency backup format—you never edit it to write a story.

## Publish the public reading site

Upload this folder to a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, then `main` and `/ (root)`.

## Why a GitHub Secret cannot protect `/#/bread`

GitHub Secrets are available to GitHub Actions during a build, not to visitors after GitHub Pages has served the site. If an HTML/JS page itself can test a password, the test (or its hash) is downloadable by everyone—so it cannot secure an author route or safely hold a GitHub token.

This repository includes `author-worker/`, a Cloudflare Worker that solves the actual problem:

1. Install Wrangler and sign in to Cloudflare.
2. In `author-worker/wrangler.toml`, set `PUBLIC_ORIGIN`, `GITHUB_OWNER`, and `GITHUB_REPO`.
3. From `author-worker/`, set secrets (they do not go in Git):

   ```powershell
   npx wrangler secret put AUTHOR_PASSWORD_HASH
   npx wrangler secret put SESSION_SECRET
   npx wrangler secret put GITHUB_TOKEN
   npx wrangler deploy
   ```

   `AUTHOR_PASSWORD_HASH` is the SHA-256 hex digest of your chosen password. `GITHUB_TOKEN` needs permission to update this repository's contents.

4. Put the deployed Worker URL in [assets/author-config.js](assets/author-config.js).

Now the public site sends the password only to the Worker over HTTPS; the Worker keeps the password hash and GitHub token secret, verifies the author session, and publishes `data/stories.js` through the GitHub API. The public reader stays on GitHub Pages, while only you can use the author endpoint.
