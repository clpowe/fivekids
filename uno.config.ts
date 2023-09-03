// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Poppins',
				sarif: 'Playfair Display'
			}
		})
	]
});
