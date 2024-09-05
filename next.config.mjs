// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
export function webpack(config) {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
        test: /\.(pdf)$/,
        type: 'asset/resource',
    });

    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));
    config.module.rules.push(
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/,
        },
        {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
            use: ['@svgr/webpack'],
        }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
}