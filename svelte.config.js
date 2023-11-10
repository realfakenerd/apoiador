import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte"],
  kit: {
    adapter: adapter()
  },
  preprocess: [vitePreprocess()]
};
export default config;