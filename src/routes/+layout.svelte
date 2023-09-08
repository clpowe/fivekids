<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head />
<div class="bg-neutral-100 font-sans parent">
	<Header />
	<div class="bg-neutral-100">
		<div class="max-w-4xl px-4 mx-auto">
			<slot />
		</div>
	</div>
	<Footer />
</div>

<style>
	.parent {
		display: grid;
		grid-template-rows: 1fr auto;

		min-height: 100dvh;
	}
</style>
