import { j as json } from "../../../chunks/index.js";
import { s as storyblokInit, u as useStoryblokApi, a as ut } from "../../../chunks/index2.js";
storyblokInit({
  accessToken: "k44pDOiPFX7oGiCZzv5QhQtt",
  use: [ut],
  apiOptions: {
    region: "us"
  }
});
let storyblokApi = await useStoryblokApi();
async function POST({ request }) {
  const { nxt } = await request.json();
  const { data, perPage, total } = await storyblokApi.get("cdn/stories/", {
    version: "published",
    content_type: "blogPost",
    page: nxt,
    per_page: 5
  });
  const posts = data.stories.map((story) => {
    return {
      title: story.content.title,
      date: story.published_at,
      image: story.content.preview_Image?.filename,
      description: story.content.description,
      slug: story.full_slug,
      tags: story.tag_list
    };
  });
  return json(posts);
}
export {
  POST
};
