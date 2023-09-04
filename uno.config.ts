// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetWebFonts, presetTypography } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Poppins',
				sarif: 'Playfair Display'
			}
		})
	]
});
