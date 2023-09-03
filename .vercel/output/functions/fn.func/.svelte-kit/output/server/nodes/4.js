

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.31b38990.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/index.d033ac9c.js"];
export const stylesheets = [];
export const fonts = [];
