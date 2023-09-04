<script lang="ts">
	import SmallTitle from '../lib/components/SmallTitle.svelte';

	import BlogCard from '$lib/components/BlogCard.svelte';
	import Logo from '$lib/assets/logo.svg';
	import signiture from '$lib/assets/signiture.png';
	import Ashley from '$lib/assets/Ashley.jpg';
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
	<aside class="max-w-none md:max-w-[24ch] space-y-16">
		<article class="text-center flex flex-col gap-4 justify-center">
			<SmallTitle el="h3" title="about me" />

			<div class="overflow-hidden rounded-full w-36 mx-a">
				<img src={Ashley} alt="Ashley Powe" class="" />
			</div>
			<p class="uppercase font-bold text-sm">Ashley Powe</p>
			<p class="text-sm font-sarif text-gray-700 max-w-md mx-a">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
			<img src={signiture} alt="" class="w-32 mx-a" />
		</article>
		<div>
			<SmallTitle el="h3" title="latest post" />
			<ul class="space-y-8 mt-8">
				{#each data.recentPost as link}
					<li class="grid grid-flow-col gap-2">
						<a href={`/blog/${link.slug}`} class="w-16 h-16">
							<img src={link.image} alt="" class="w-16 h-16 object-cover" />
						</a>
						<div>
							<a
								href={`/blog/${link.slug}`}
								class="text-md font-bold leading-tight line-clamp-2 mb-1">{link.title}</a
							>
							<p class="text-sm text-gray-700 font-sarif">
								{new Date(link.date).toLocaleDateString('en-US', {
									dateStyle: 'medium'
								})}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
</div>
