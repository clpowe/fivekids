import * as universal from '../entries/pages/blog/_article_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_article_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[article]/+page.ts";
export const imports = ["_app/immutable/nodes/5.ca2607be.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/index.d033ac9c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = [];
export const fonts = [];
