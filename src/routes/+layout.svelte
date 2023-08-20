<script lang="ts">
	import '@unocss/reset/tailwind-compat.css';
	import 'uno.css';

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head />
<div>
	<Header />
	<div class="max-w-[110ch] px-4 mx-auto sm:my-16 md:my-24">
		<slot />
	</div>
</div>
