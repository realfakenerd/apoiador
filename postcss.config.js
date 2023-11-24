import autoprefixer from 'autoprefixer';
import cssDeclarationSorter from 'css-declaration-sorter';
import tailwindcss from 'tailwindcss';
import nesting from 'postcss-nesting';

export default {
	plugins: [
		nesting,
		tailwindcss,
		autoprefixer,
		cssDeclarationSorter({ order: 'concentric-css' })
	]
};
