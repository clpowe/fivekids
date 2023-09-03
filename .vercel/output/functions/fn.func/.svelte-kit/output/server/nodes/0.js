import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.db936e7c.js","_app/immutable/chunks/index.d033ac9c.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/stores.0a211bac.js","_app/immutable/chunks/singletons.4bdf29dd.js"];
export const stylesheets = ["_app/immutable/assets/0.5e427776.css"];
export const fonts = [];
