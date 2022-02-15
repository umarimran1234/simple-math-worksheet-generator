// Consult pages below for github pages hosting static pages
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static 
// https://sveltesaas.com/articles/sveltekit-github-pages-guide/

// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import { optimizeImports, optimizeCss } from "carbon-preprocess-svelte";

import preprocess from 'svelte-preprocess';
import path from 'path';


const isDevEnv = process.env.NODE_ENV === 'development';
const isProdEnv = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports()],

	kit: {
		// configure for github pages, set to produce static files under "docs" folder 
		// adapter: adapter(),
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			// change below to your repo name
			base: isDevEnv ? '' : '/simple-math-worksheet-generator',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
					$utils: path.resolve('./src/utils')
				}
			},
			plugins: [isProdEnv && optimizeCss()]
		}
	}
};

export default config;
