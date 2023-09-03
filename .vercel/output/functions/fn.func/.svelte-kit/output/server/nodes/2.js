

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_article_/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f1f045fd.js","_app/immutable/chunks/scheduler.fe63f0e0.js","_app/immutable/chunks/index.d033ac9c.js","_app/immutable/chunks/stores.0a211bac.js","_app/immutable/chunks/singletons.4bdf29dd.js"];
export const stylesheets = [];
export const fonts = [];
