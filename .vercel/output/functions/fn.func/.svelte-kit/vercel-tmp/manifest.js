export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","foto_de_papel.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.p_SkGwWX.js","app":"_app/immutable/entry/app.qdYlGoDX.js","imports":["_app/immutable/entry/start.p_SkGwWX.js","_app/immutable/chunks/scheduler.2ebPDhFo.js","_app/immutable/chunks/singletons.z-_zn6XN.js","_app/immutable/chunks/index.TDYi4ZbL.js","_app/immutable/entry/app.qdYlGoDX.js","_app/immutable/chunks/preload-helper.CiPEJt9t.js","_app/immutable/chunks/scheduler.2ebPDhFo.js","_app/immutable/chunks/index.RMwCj6kj.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/condominio",
				pattern: /^\/api\/condominio\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/condominio/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
