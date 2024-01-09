import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.HJ7odglT.js","_app/immutable/chunks/scheduler.P0pXcjJQ.js","_app/immutable/chunks/index.7qvPTxRp.js","_app/immutable/chunks/entry.qDgmeQbA.js","_app/immutable/chunks/index.1OI2WbmT.js","_app/immutable/chunks/functions.n9_SFfyR.js","_app/immutable/chunks/each.w1_OqOoc.js","_app/immutable/chunks/spread.9r7zwDFm.js","_app/immutable/chunks/utils.ydYpTJRj.js","_app/immutable/chunks/index.mY7iIumJ.js","_app/immutable/chunks/index.5zuswZhg.js","_app/immutable/chunks/updater.X8loKiOF.js","_app/immutable/chunks/index.quOx91Ki.js","_app/immutable/chunks/button.WF-voMRz.js","_app/immutable/chunks/stores.kuJO-obj.js","_app/immutable/chunks/Icon.FM4iHKo6.js"];
export const stylesheets = ["_app/immutable/assets/0.bamXSHCk.css","_app/immutable/assets/post.e1YtyGfS.css"];
export const fonts = [];
