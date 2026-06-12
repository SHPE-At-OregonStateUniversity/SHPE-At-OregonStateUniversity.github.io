<script lang="ts">
	import { cld } from '$lib/images';

	let {
		publicId,
		alt,
		sizes = '100vw',
		widths = [400, 800, 1200, 1600],
		loading = 'lazy'
	}: {
		publicId: string;
		alt: string;
		sizes?: string;
		widths?: number[];
		loading?: 'lazy' | 'eager';
	} = $props();

	const srcset = $derived(
		widths.map((w) => `${cld(publicId, `f_auto,q_auto,w_${w}`)} ${w}w`).join(', ')
	);
	const src = $derived(cld(publicId, `f_auto,q_auto,w_${widths[widths.length - 1]}`));
</script>

<img {src} {srcset} {sizes} {alt} {loading} decoding="async" />
