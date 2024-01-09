import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.pBJe_A01.js","_app/immutable/chunks/scheduler.2ebPDhFo.js","_app/immutable/chunks/index.RMwCj6kj.js","_app/immutable/chunks/singletons.z-_zn6XN.js","_app/immutable/chunks/index.TDYi4ZbL.js","_app/immutable/chunks/functions._Oe4yM05.js","_app/immutable/chunks/each.Xa07BEW-.js","_app/immutable/chunks/spread.9r7zwDFm.js","_app/immutable/chunks/utils.ydYpTJRj.js","_app/immutable/chunks/index.l5oKQO4h.js","_app/immutable/chunks/index.AVqZ5kE7.js","_app/immutable/chunks/updater.zel_Kvn4.js","_app/immutable/chunks/index.FxzE-fmT.js","_app/immutable/chunks/button.A2uw6ENk.js","_app/immutable/chunks/stores.rtuGJYIY.js","_app/immutable/chunks/Icon.xnpKJ_t8.js"];
export const stylesheets = ["_app/immutable/assets/0.cJbYtGuA.css","_app/immutable/assets/post.e1YtyGfS.css"];
export const fonts = [];
