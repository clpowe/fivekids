import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-e14vyb_START -->${$$result.title = `<title>5 kids and Planning | About Me</title>`, ""}<!-- HEAD_svelte-e14vyb_END -->`, ""} <h1 data-svelte-h="svelte-soqi9t">About</h1>`;
});
export {
  Page as default
};
