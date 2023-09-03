import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-55z287_START -->${$$result.title = `<title>5 Kids and Planning | Kids</title>`, ""}<!-- HEAD_svelte-55z287_END -->`, ""}`;
});
export {
  Page as default
};
