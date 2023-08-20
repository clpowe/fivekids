<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
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
</script>

<div class="flex flex-col gap-8 md:flex-row">
	<main>
		{#each stories as story}
			<BlogCard {...story} />
		{/each}
		{#if page > 1}
			<button on:click={prev}>Previous</button>
		{/if}
		{#if lastpage >= page}
			<button on:click={next}>Next</button>
		{/if}
	</main>
	<aside class="max-w-full md:max-w-[28ch] space-y-4">
		<article>
			<h3 class="text-3xl font-bold">About</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur....
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
