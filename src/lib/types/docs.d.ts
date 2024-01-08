type Metadata = {
	title: string;
	description: string;
	openGraph: {
		title: string;
		description: string;
		type: 'article';
		url: string;
		images: [
			{
				url: string;
				width: number;
				height: number;
				alt: string;
			}
		];
	};
	twitter: {
		card: 'summary_large_image';
		title: string;
		description: string;
		images: string[];
		creator: string;
	};
};

type FrontMatter = {
	title: string;
	description: string;
	component: boolean;
	source: string;
	external?: {
		project: string;
		url: string;
	};
	bits?: string;
};

type DocFile = {
	default: import('svelte').SvelteComponent;
	metadata: FrontMatter;
};

type DocResolver = () => Promise<DocFile>;

type TableOfContentsItem = {
	title: string;
	url: string;
	items?: TableOfContentsItem[];
};

type TableOfContents = {
	items: TableOfContentsItem[];
};
