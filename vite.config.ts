import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	],
	build: {
		minify: 'terser',
		target: 'esnext',
		terserOptions: {
			compress: {
				keep_infinity: true,
				pure_getters: true,
				drop_console: true
			}
		},
		reportCompressedSize: false
	},
	server: {
		fs: {
			allow: ['.']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
