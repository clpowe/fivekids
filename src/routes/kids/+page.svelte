<script lang="ts">
	import type { PageData } from './$types';
	import Logo2 from '$lib/assets/logo-two.svg';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageData;

	let articles = data.stories;
</script>

<svelte:head>
	<title>5 Kids and Planning | Kids</title>
</svelte:head>
<div class="h-96 grid place-content-center hero to-transparent">
	<img src={Logo2} alt="" class="h-16" />
</div>
<h1>Kids</h1>
<div class="grid md:grid-cols-2 gap-4">
	{#if articles.length > 0}
		{#each articles as story}
			<BlogCard {...story} />
		{/each}
	{:else}
		<h2>Oh No...</h2>
	{/if}
</div>
