import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import extractorSvelte from '@unocss/extractor-svelte';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte()]
			/* more options */
		})
	]
});
