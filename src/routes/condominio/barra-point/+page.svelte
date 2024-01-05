<script>
	import { popup } from '@skeletonlabs/skeleton';

	const popupFeatured = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<h1 class="text-headline-large">Condomínio Barra Point</h1>

<button
	class="btn variant-filled [&>*]:pointer-events-none"
	use:popup={{
		// Represents the type of event that opens/closed the popup
		event: 'hover',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'right'
	}}>Show Popup</button
>

<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<div><p>Demo Content</p></div>
	<div class="arrow bg-surface-100-800-token" />
</div>
