import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { Story, Post } from '../../Types/Blog';

type Auther = {};

let page: number = 1;

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'k44pDOiPFX7oGiCZzv5QhQtt',
		use: [apiPlugin],
		apiOptions: {
			region: 'us'
		}
	});
	let storyblokApi = await useStoryblokApi();

	const { data, perPage, total } = await storyblokApi.get('cdn/stories/', {
		version: 'published',
		content_type: 'blogPost',
		page: page,
		with_tag: 'kids',
		per_page: 6
	});

	let lastpage = Math.round(total / perPage);

	const posts: Post[] = data.stories.map((story: Story) => {
		return {
			title: story.content.title,
			date: story.published_at,
			image: story.content.preview_Image?.filename,
			description: story.content.description,
			slug: story.slug,
			tags: story.tag_list,
			content: story.content.content,
			mainImage: story.content.main_image.filename
		};
	});

	return {
		stories: posts,
		page,
		lastpage
	};
}
