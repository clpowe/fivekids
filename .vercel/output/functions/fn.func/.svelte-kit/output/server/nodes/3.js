

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.47aa8a7f.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/index.d033ac9c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = [];
export const fonts = [];
