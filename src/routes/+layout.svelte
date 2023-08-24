<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head />
<div>
	<Header />
	<div class="max-w-[110ch] px-4 mx-auto sm:my-16 md:my-24">
		<slot />
	</div>
	<Footer />
</div>
