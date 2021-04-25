/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-typescript',
            {
                /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
                ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
            },
        ],
    ],
    alias: {
        "@app": "./src/",
    },
    routes: [
        /* Enable an SPA Fallback in development: */
        {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        bundle: true,
        splitting: true,
        minify: true,
        treeshake: true,
        target: "es2017"
    },
    packageOptions: {
        polyfillNode: true,
        rollup: {plugins: [require('rollup-plugin-scss')()]}
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    }
};