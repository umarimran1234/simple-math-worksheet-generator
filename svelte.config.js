// Consult pages below for github pages hosting static pages
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static 
// https://sveltesaas.com/articles/sveltekit-github-pages-guide/

// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

import preprocess from 'svelte-preprocess';
import path from 'path';


const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// configure for github pages, set to produce static files under "docs" folder 
		// adapter: adapter(),
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/simple-math-worksheet-generator',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$utils: path.resolve('./src/utils')
				}
			}
		}
	}
};

export default config;
