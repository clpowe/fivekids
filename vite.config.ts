import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()]

	// server: {
	// 	https: true
	// }
});
