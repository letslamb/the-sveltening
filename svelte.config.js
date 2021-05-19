import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import path from 'path'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $static: path.resolve('static')
        }
      },
      plugins: [imagetools({force: true})]
    }
	}
};

export default config;
