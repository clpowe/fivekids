

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kids/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.071c41f1.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/index.d033ac9c.js"];
export const stylesheets = [];
export const fonts = [];