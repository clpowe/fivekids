import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { Story } from '../Types/Blog';

type Post = {
	title: string;
	date: Date;
	image: string;
	description: string;
	slug: string;
	tags?: string[];
	content: string;
	mainImage: string;
};

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
		per_page: 5
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

	const recentPost: Post[] = posts.slice(0, 5);

	return {
		storyblokApi: storyblokApi,
		stories: posts,
		page,
		lastpage,
		recentPost
	};
}
