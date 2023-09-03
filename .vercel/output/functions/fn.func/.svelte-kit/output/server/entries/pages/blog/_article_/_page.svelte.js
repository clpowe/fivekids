import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../../../chunks/ssr.js";
import { e as error } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let article = data.stories.find((story) => story.slug === data.article);
  if (!article) {
    throw error(404, { message: "Looks like you are lost" });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-k3f70d_START -->${$$result.title = `<title>${escape(article?.title)}</title>`, ""}<!-- HEAD_svelte-k3f70d_END -->`, ""} <div class="max-w-[110ch] px-4 mx-auto sm:my-16 md:my-24"><div class="flex flex-col gap-8 md:flex-row"><main><article class="w-full space-y-8 max-w-[75ch]"><img${add_attribute("src", article?.mainImage, 0)} height="300" width="672" alt="" class=""> <div><h1 class="text-5xl font-bold mb-4">${escape(article?.title)}</h1> <p class="text-base prose prose-truegray"><!-- HTML_TAG_START -->${article?.content}<!-- HTML_TAG_END --></p></div> <div data-svelte-h="svelte-3kysse"></div></article></main> <aside class="max-w-full md:max-w-[28ch] space-y-4"><article data-svelte-h="svelte-t2eysz"><h3 class="text-3xl font-bold">About</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....</p></article> <ul>${each(data.recentPost, (link) => {
    return `<li><a data-sveltekit-reload${add_attribute("href", link.slug, 0)}>${escape(link.title)}</a> </li>`;
  })}</ul></aside></div></div>`;
});
export {
  Page as default
};
