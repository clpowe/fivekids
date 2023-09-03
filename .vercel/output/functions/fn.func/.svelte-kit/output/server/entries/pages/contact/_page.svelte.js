import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-2oxsm6_START -->${$$result.title = `<title>5 Kids and Planning | Contact</title>`, ""}<!-- HEAD_svelte-2oxsm6_END -->`, ""} <h1 data-svelte-h="svelte-tbczl2">Contact</h1>`;
});
export {
  Page as default
};
