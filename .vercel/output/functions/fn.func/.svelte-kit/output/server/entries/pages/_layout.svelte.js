import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const __uno = "";
const tailwind = "";
const NavLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".active.svelte-md7b85{color:#fafaf9;background:#4a044e}",
  map: null
};
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { route } = $$props;
  let { name } = $$props;
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<li class="${["h-full flex items-center svelte-md7b85", routeId === route ? "active" : ""].join(" ").trim()}"><a${add_attribute("href", route, 0)} class="${["h-full flex items-center svelte-md7b85", routeId === route ? "active" : ""].join(" ").trim()}"><div class="w-full h-full px-4 py-2 flex items-center uppercase text-xs font-bold">${escape(name)}</div></a> </li>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/planning", name: "Planning" },
    { route: "/kids", name: "Kids" },
    { route: "/contact", name: "Contact" }
  ];
  $page.route.id;
  $$unsubscribe_page();
  return `<header class="bg-[#fafaf9] z-50 relative"><div class="max-w-4xl mx-auto flex justify-between relative h-12 px-4"><div class="my-auto block sm:hidden"><button aria-controls="menu" class="btn flex items-center" data-svelte-h="svelte-rvsneg"><div class="i-mdi-menu w-8 h-8"></div></button> ${``}</div> <nav aria-label="Main" aria-hidden="true" class="w-full hidden sm:flex"><ul class="flex items-center">${each(pages, (page2) => {
    return `${validate_component(NavLink, "NavLink").$$render($$result, Object.assign({}, page2), {}, {})}`;
  })}</ul></nav> <div class="flex items-center gap-4" data-svelte-h="svelte-11hi2n7"><a href="/"><div class="i-mdi-facebook-box w-6 h-6"></div></a> <a href="/"><div class="i-mdi-instagram w-6 h-6"></div></a></div></div> </header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".parent.svelte-uorc6z.svelte-uorc6z{display:flex;flex-wrap:wrap;align-items:start;gap:var(--s1)}.parent.svelte-uorc6z>.svelte-uorc6z:first-child{flex-basis:300px;flex-grow:1}.parent.svelte-uorc6z>.svelte-uorc6z:last-child{flex-basis:0;flex-grow:9999;min-inline-size:60%}form.svelte-uorc6z.svelte-uorc6z{max-width:var(--measure)}.input.svelte-uorc6z.svelte-uorc6z{display:flex;flex-wrap:wrap;align-items:start;gap:var(--s1)}.input.svelte-uorc6z>.svelte-uorc6z:last-child{flex-basis:300px;flex-grow:1}.input.svelte-uorc6z>.svelte-uorc6z:first-child{flex-basis:0;flex-grow:9999;min-inline-size:60%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer data-svelte-h="svelte-ix7vrq"><div class="max-w-[110ch] mx-auto"><div class="parent svelte-uorc6z"><div class="svelte-uorc6z"><h3>Follow Me</h3> <nav><ul><li><a href="">Facebook</a></li> <li><a href="">Instagram</a></li> <li><a href="">Twitter</a></li> <li><a href="">Threads</a></li></ul></nav></div> <div class="svelte-uorc6z"><form class="svelte-uorc6z"><h3>Newsletter Signup</h3> <label for="Email">Enter your email</label> <div class="input svelte-uorc6z"><input type="email" placeholder="Enter your email..." class="svelte-uorc6z"> <button class="svelte-uorc6z">Subscribe</button></div></form></div></div></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""} <div class="bg-stone-100 font-sans">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="max-w-4xl px-4 mx-auto">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
