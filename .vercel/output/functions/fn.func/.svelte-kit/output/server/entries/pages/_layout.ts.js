import { s as storyblokInit, a as ut, u as useStoryblokApi } from "../../chunks/index2.js";
let page = 1;
async function load() {
  storyblokInit({
    accessToken: "k44pDOiPFX7oGiCZzv5QhQtt",
    use: [ut],
    apiOptions: {
      region: "us"
    }
  });
  let storyblokApi = await useStoryblokApi();
  const { data, perPage, total } = await storyblokApi.get("cdn/stories/", {
    version: "published",
    content_type: "blogPost",
    page,
    per_page: 5
  });
  let lastpage = Math.round(total / perPage);
  const posts = data.stories.map((story) => {
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
  const recentPost = posts.slice(0, 5);
  return {
    storyblokApi,
    stories: posts,
    page,
    lastpage,
    recentPost
  };
}
export {
  load
};
