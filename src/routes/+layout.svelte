<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head />
<div class="bg-stone-100 font-sans">
	<Header />
	<div class="max-w-4xl px-4 mx-auto">
		<slot />
	</div>
	<Footer />
</div>
