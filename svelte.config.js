import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			envPrefix: '',
			polyfill: true,
			sourcemap: true,
		}),

		alias: {
			'+components': './src/components',
			'+img': './src/img',
			'+style': './src/style',
			'+mix': './src/style/mixins',
		}
	}
};

export default config;
