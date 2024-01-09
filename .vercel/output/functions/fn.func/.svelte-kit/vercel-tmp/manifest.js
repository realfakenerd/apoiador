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
		client: {"start":"_app/immutable/entry/start.xl1Tr-WG.js","app":"_app/immutable/entry/app.PeVAz-dD.js","imports":["_app/immutable/entry/start.xl1Tr-WG.js","_app/immutable/chunks/entry.qDgmeQbA.js","_app/immutable/chunks/scheduler.P0pXcjJQ.js","_app/immutable/chunks/index.1OI2WbmT.js","_app/immutable/entry/app.PeVAz-dD.js","_app/immutable/chunks/preload-helper.CiPEJt9t.js","_app/immutable/chunks/scheduler.P0pXcjJQ.js","_app/immutable/chunks/index.7qvPTxRp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
