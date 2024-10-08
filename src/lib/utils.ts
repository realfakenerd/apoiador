import { clsx, type ClassValue } from 'clsx';
import type { TransitionConfig } from 'svelte/transition';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { easeEmphasized } from './components/nav/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const buttonVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
			outline:
				'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-9 px-4 py-2',
			sm: 'h-8 rounded-md px-3 text-xs',
			lg: 'h-10 rounded-md px-8',
			icon: 'h-9 w-9'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

interface FlyAndScaleParams {
	y?: number;
	x?: number;
	easing?: (t: number) => number;
	start?: number;
	rotation?: number;
	duration?: number;
}

function mapValueInRange(
	value: number,
	inputRange: [number, number],
	outputRange: [number, number]
) {
	const [minA, maxA] = inputRange;
	const [minB, maxB] = outputRange;

	const percentage = (value - minA) / (maxA - minA);
	return percentage * (maxB - minB) + minB;
}

function buildCSSString(style: Record<string, number | string | undefined>) {
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === undefined) return str;
		return str + `${key}:${style[key]};`;
	}, '');
}

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150, easing: easeEmphasized }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const css = (t: number) => {
		const y = mapValueInRange(t, [0, 1], [params.y ?? -8, 0]);
		const x = mapValueInRange(t, [0, 1], [params.x ?? 0, 0]);
		const scale = mapValueInRange(t, [0, 1], [params.start ?? 0.95, 1]);
		const rotation = params.rotation ?? 0;

		const style = {
			transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`,
			opacity: t
		};

		return buildCSSString(style);
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css,
		easing: params.easing
	};
};

export function formatDate(
	date: string | Date,
	locales = 'en-US',
	options: Intl.DateTimeFormatOptions = { dateStyle: 'short' }
) {
	if (!date) return;

	let dateToFormat;
	if (typeof date === 'string') {
		dateToFormat = new Date(date.replaceAll('-', '/'));
	}
	const dateFormatter = new Intl.DateTimeFormat(locales, options);
	return dateFormatter.format(dateToFormat);
}

export function transformToNestedObject<T>(input: Record<string, any>) {
	const output: Record<string, any> = {};

	for (const key in input) {
		const value = input[key];
		const levels = key.split(':');
		let currentLevel: Record<string, any> = output;

		// Iterate through levels up to the second last
		for (let i = 0; i < levels.length - 1; i++) {
			const level = levels[i];
			if (!currentLevel[level]) {
				currentLevel[level] = {};
			}
			currentLevel = currentLevel[level];
		}

		// Assign value to the last level
		const lastLevel = levels[levels.length - 1];
		currentLevel[lastLevel] = value;
	}

	return output as T;
}

export const links = [
	{
		link: 'http://10.99.1.42/webponto/',
		text: 'Web Ponto',
		icon: 'mdi:clock'
	},
	{
		link: 'http://apsant42/GHQUIOSQUEV41/Default.aspx',
		text: 'Contracheque',
		icon: 'mdi:cash'
	},
	{
		link: 'http://apsant113/CFA/',
		text: 'Consulta de Férias',
		icon: 'mdi:party-popper'
	},
	{
		link: 'https://tiapsa.on.spiceworks.com/portal/registrations',
		text: 'Helpdesk',
		icon: 'mdi:desktop-tower-monitor'
	},
	{
		link: 'http://apsant40:27700/12535a81x1918q101do251281ev4/',
		text: 'Casa 41',
		icon: 'mdi:tools'
	},
	{
		link: 'https://apsa.ead.voxeldigital.com.br/',
		text: 'Apsa EAD',
		icon: 'mdi:school-outline'
	},
	{
		link: 'http://apsant113/sr/',
		text: 'Sala de Reunião',
		icon: 'mdi:account-group'
	},
	{
		link: 'https://apsa-one.vercel.app/',
		text: 'Site Apsa',
		icon: 'mdi:web'
	}
];
