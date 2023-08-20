<script lang="ts">
	import { error } from '@sveltejs/kit';
	export let data;

	let article = data.stories.find((story) => story.slug === data.article);

	if (!article) {
		throw error(404, {
			message: 'Looks like you are lost'
		});
	}
</script>

<div class="max-w-[110ch] px-4 mx-auto sm:my-16 md:my-24">
	<div class="flex flex-col gap-8 md:flex-row">
		<main>
			<article class="w-full space-y-8 max-w-[75ch]">
				<img src={article?.mainImage} height="300" width="672" alt="" class="" />
				<div>
					<h1 class="text-5xl font-bold mb-4">{article?.title}</h1>
					<p class="text-base prose prose-truegray">
						{@html article?.content}
					</p>
				</div>
				<div>
					<!-- <Author
						name={author.name}
						quote={author.tagline}
						image={author.image.filename}
					/> -->
				</div>
			</article>
		</main>
		<aside class="max-w-full md:max-w-[28ch] space-y-4">
			<article>
				<h3 class="text-3xl font-bold">About</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....
				</p>
			</article>
			<ul>
				{#each data.recentPost as link}
					<li>
						<a data-sveltekit-reload href={link.slug}>{link.title}</a>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>
