import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  let { image } = $$props;
  let { description } = $$props;
  let { slug } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  return `<div class=""><img height="600" width="600"${add_attribute("src", image, 0)} alt="" class="w-full h-80 z-10"> <div class="relative space-y-2 bg-stone-100 p-8 w-10/12 mx-auto -mt-16 z-10 outline outline-stone-100 outline-offset-[1rem]"><div class="space-y-4 mb-4"><p class="text-fuchsia-950 font-sarif" data-svelte-h="svelte-ma9bba">Kids and Family</p> <h2 class="text-3xl font-bold capitalize leading-snug">${escape(title)}</h2> <p class="text-gray-700 text-sm font-sarif leading-relaxed">${escape(description)}</p> <div><a class="mt-4 text-sm"${add_attribute("href", `/blog/${slug}`, 0)}>Keep Reading</a></div></div> <div class="border-t-2 border-stone-200 py-4 mt-4 flex justify-between items-center"><p class="text-sm" data-svelte-h="svelte-r4clf4">By: <span class="uppercase font-bold">Ashley Powe</span></p> <time class="text-sm text-gray-700 font-sarif">${escape(new Date(date).toLocaleDateString("en-US", { dateStyle: "full" }))}</time></div></div></div>`;
});
const Logo = "/_app/immutable/assets/logo.444190b8.svg";
const Planning = "/_app/immutable/assets/planning.4c70137f.jpg";
const NavCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { route } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  return `<li class="relative outline outline-stone-50 outline-offset-[-1rem]"><a${add_attribute("href", route, 0)} class="z-10 relative grid place-content-center h-64 sm:h-80 overflow-hidden outline outline-2 outline-stone-50 outline-offset-[-1rem]"><span class="z-10 bg-fuchsia-950 text-stone-50 px-4 py-2">${escape(name)}</span></a> <img${add_attribute("src", Planning, 0)} alt="" class="h-full w-full absolute top-0 left-0 object-cover transition-transform duration-400 hover:scale-120 opacity-75"></li>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let stories = data.stories;
  let page = data.page;
  let lastpage = data.lastpage;
  const pages = [
    { route: "/about", name: "About" },
    { route: "/planning", name: "Planning" },
    { route: "/kids", name: "Kids" }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ub3jhi_START -->${$$result.title = `<title>5 Kids and Planning</title>`, ""}<!-- HEAD_svelte-1ub3jhi_END -->`, ""} <div class="h-96 grid place-content-center hero to-transparent" data-svelte-h="svelte-1p8tagu"><img${add_attribute("src", Logo, 0)} class="z-10 reletive"></div> <section class="mb-20"><nav><ul class="grid sm:grid-cols-3 gap-4">${each(pages, (page2) => {
    return `${validate_component(NavCard, "NavCard").$$render($$result, Object.assign({}, page2), {}, {})}`;
  })}</ul></nav></section> <div class="flex flex-col gap-8 md:flex-row"><main class="grid gap-10"><div class="space-y-16">${stories.length > 0 ? `${each(stories, (story) => {
    return `${validate_component(BlogCard, "BlogCard").$$render($$result, Object.assign({}, story), {}, {})}`;
  })}` : `<h2 data-svelte-h="svelte-1r4vnde">Oh No...</h2>`}</div> <div class="mt-auto w-full flex mt-10">${page > 1 ? `<button class="btn btn-secondary mr-auto" data-svelte-h="svelte-1j8kg8l">Previous</button>` : ``} ${lastpage >= page ? `<button class="btn btn-secondary ml-auto" data-svelte-h="svelte-1eemv13">Next</button>` : ``}</div></main> <aside class="max-w-full sm:max-w-[24ch] space-y-4"><article data-svelte-h="svelte-1bo9y7u"><h3 class="text-xl font-bold">About</h3> <p class="uppercase font-bold">Ashley Powe</p> <p class="text-sm font-sarif text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.</p></article> <div><ul>${each(data.recentPost, (link) => {
    return `<li><a${add_attribute("href", `/blog/${link.slug}`, 0)}>${escape(link.title)}</a> </li>`;
  })}</ul></div></aside> </div>`;
});
export {
  Page as default
};
