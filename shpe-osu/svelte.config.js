import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Pure prerendered static site for GitHub Pages (org user-pages repo,
		// served at the domain root). No fallback: every route is a real
		// index.html, prerendered via src/routes/+layout.ts.
		adapter: adapter(),
		paths: {
			base: ''
		}
	}
};

export default config;
