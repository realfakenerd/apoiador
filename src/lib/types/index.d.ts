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
	title: string
	/** blog post description */
	description: string
	/** blog post slug for using on `<a/>` */
	slug: string
	/** blog post publish date */
	published: string
	/** blog post categories */
	category: string | string[]
	/** series of posts */
	series?: string
	/** is published or not */
	draft?: string
}