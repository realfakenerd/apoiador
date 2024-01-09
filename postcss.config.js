import autoprefixer from 'autoprefixer';
import cssDeclarationSorter from 'css-declaration-sorter';
import tailwindcss from 'tailwindcss';
import nesting from 'postcss-nesting';
import cssnano from 'cssnano';

export default {
	plugins: [
		nesting,
		tailwindcss,
		autoprefixer,
		cssDeclarationSorter({ order: 'concentric-css' }),
		cssnano
	]
};
