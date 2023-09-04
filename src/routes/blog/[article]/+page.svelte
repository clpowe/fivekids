<script lang="ts">
	export const prerender = true;

	import { renderRichText } from '@storyblok/svelte';
	import SmallTitle from '$lib/components/SmallTitle.svelte';
	import signiture from '$lib/assets/signiture.png';
	import Logo from '$lib/assets/logo.svg';
	import Ashley from '$lib/assets/Ashley.jpg';
	import { error } from '@sveltejs/kit';
	export let data;

	let article = data.stories.find((story) => story.slug === data.article);

	if (!article) {
		throw error(404, {
			message: 'Looks like you are lost'
		});
	}

	let articleHTML = renderRichText(article.content);
</script>

<svelte:head>
	<title>{article?.title}</title>
</svelte:head>

<div class="max-w-[110ch] px-4 mx-auto">
	<div class="h-96 grid place-content-center hero to-transparent">
		<img src={Logo} class="z-10 reletive" />
	</div>
	<div class="flex flex-col gap-8 md:flex-row">
		<main>
			<article class="w-full space-y-8">
				<img
					src={article?.mainImage}
					height="700"
					width="600"
					alt=""
					class="w-full h-96 object-cover"
				/>
				<div>
					<h1 class="text-4xl font-bold mb-4">{article?.title}</h1>
					<p class="text-base prose prose-truegray font-sarif">
						{@html articleHTML}
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
		<aside class="max-w-none md:max-w-[24ch] space-y-16">
			<article class="text-center flex flex-col gap-4 justify-center">
				<SmallTitle el="h3" title="about me" />

				<div class="overflow-hidden rounded-full w-36 mx-a">
					<img src={Ashley} alt="Ashley Powe" class="" />
				</div>
				<p class="uppercase font-bold text-sm">Ashley Powe</p>
				<p class="text-sm font-sarif text-gray-700 max-w-md mx-a">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<img src={signiture} alt="" class="w-32 mx-a" />
			</article>
			<div>
				<SmallTitle el="h3" title="latest post" />
				<nav data-sveltekit-reload data-sveltekit-preload-code data-sveltekit-preload-data>
					<ul class="space-y-8 mt-8">
						{#each data.recentPost as link}
							<li class="grid grid-flow-col gap-2">
								<a
									href={`/blog/${link.slug}`}
									class="w-16 h-16"
									data-sveltekit-preload-code
									data-sveltekit-preload-data
								>
									<img src={link.image} alt="" class="w-16 h-16 object-cover" />
								</a>
								<div>
									<a
										href={`/blog/${link.slug}`}
										class="text-md font-bold leading-tight line-clamp-2 mb-1"
										data-sveltekit-preload-data>{link.title}</a
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
				</nav>
			</div>
		</aside>
	</div>
</div>
