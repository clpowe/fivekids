import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-osljd3_START -->${$$result.title = `<title>5 Kids and Planning | Planning</title>`, ""}<!-- HEAD_svelte-osljd3_END -->`, ""} <h1 data-svelte-h="svelte-x12znt">Planning</h1>`;
});
export {
  Page as default
};
