interface OpenWeather {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

interface Clouds {
	all: number;
}

interface Coord {
	lon: number;
	lat: number;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface Sys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Wind {
	speed: number;
	deg: number;
}

interface SinglePost {
	content: string;
	fm: Fm;
}

/**
 * The `interface Post` is defining the structure of an object that represents a blog post.
 * It has the following properties
 */
interface Post {
	/** blog post title */
	title: string;
	/** blog post description */
	description: string;
	/** blog post publish date */
	published: string;
	/** blog post update date */
	updated: string;
	/** blog post categories */
	category: string[];
	/** series of posts */
	series?: string;
	/** is published or not */
	draft?: string;

	/** image for thumb */
	image?: string;
}

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
