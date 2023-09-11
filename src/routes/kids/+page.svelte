<script lang="ts">
	import type { PageData } from './$types';
	import Logo2 from '$lib/assets/logo-two.svg';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageData;

	let stories = data.stories;
	let page: number = data.page;
	let lastpage: number = data.lastpage;

	async function next() {
		const nxt = page + 1;
		page = nxt;

		const res = await fetch('/kidsarticles', {
			method: 'POST',
			body: JSON.stringify({ nxt }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		stories = await res.json();
	}

	async function prev() {
		const nxt = page - 1;
		page = nxt;

		const res = await fetch('/kidsarticles', {
			method: 'POST',
			body: JSON.stringify({ nxt }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		stories = await res.json();
	}
</script>

<svelte:head>
	<title>5 Kids and Planning | Kids</title>
</svelte:head>
<div class="h-96 grid place-content-center hero to-transparent">
	<img src={Logo2} alt="" class="h-16" />
</div>
<h1 class="text-center font-sarif mb-16">
	Currently Viewing Tag: <span class="font-bold">Kids</span>
</h1>
<div class="grid md:grid-cols-2 gap-4">
	{#if stories.length > 0}
		{#each stories as story}
			<BlogCard {...story} />
		{/each}
	{:else}
		<h2>Oh No...</h2>
	{/if}
</div>
<div class="mt-auto w-full flex mt-10">
	{#if page > 1}
		<button class="btn btn-secondary mr-auto" on:click={prev}>Previous</button>
	{/if}
	{#if lastpage > page}
		<button class="btn btn-secondary ml-auto" on:click={next}>Next</button>
	{/if}
</div>
