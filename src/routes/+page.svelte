<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Logo from '$lib/assets/logo.svg';
	import Planning from '$lib/assets/herotest.png';
	import NavCard from '$lib/components/NavCard.svelte';

	export let data;

	let stories = data.stories;
	let page: number = data.page;
	let lastpage: number = data.lastpage;

	async function next() {
		const nxt = page + 1;
		page = nxt;

		const res = await fetch('/articles', {
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

		const res = await fetch('/articles', {
			method: 'POST',
			body: JSON.stringify({ nxt }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		stories = await res.json();
	}

	const pages = [
		{
			route: '/about',
			name: 'About'
		},
		{
			route: '/planning',
			name: 'Planning'
		},
		{
			route: '/kids',
			name: 'Kids'
		}
	];
</script>

<svelte:head>
	<title>5 Kids and Planning</title>
</svelte:head>

<div class="h-96 grid place-content-center hero to-transparent">
	<img src={Logo} class="z-10 reletive" />
</div>
<section class="mb-20">
	<nav>
		<ul class="grid sm:grid-cols-3 gap-4">
			{#each pages as page}
				<NavCard {...page} />
			{/each}
		</ul>
	</nav>
</section>
<div class="flex flex-col gap-8 md:flex-row">
	<main class="grid gap-10">
		<div class="space-y-16">
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
			{#if lastpage >= page}
				<button class="btn btn-secondary ml-auto" on:click={next}>Next</button>
			{/if}
		</div>
	</main>
	<aside class="max-w-full sm:max-w-[24ch] space-y-4">
		<article>
			<h3 class="text-xl font-bold">About</h3>
			<p class="uppercase font-bold">Ashley Powe</p>
			<p class="text-sm font-sarif text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</article>
		<div>
			<ul>
				{#each data.recentPost as link}
					<li>
						<a href={`/blog/${link.slug}`}>{link.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
</div>

<style>
</style>
