import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte"],
  kit: {
    adapter: adapter(),
    prerender:{
      entries: [
        "/api/procedimento/post_1.json",
        "/api/procedimento/post_2.json",
        "/api/procedimentos",
        "/api/previsao_do_tempo",
        "/procedimentos",
        "/procedimentos/post_1",
        "/procedimentos/post_2",
        "/",
      ]
    }
  },
  preprocess: [vitePreprocess()]
};
export default config;