/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const nextConfig = {
    basePath: isDev ? '' : "/ck-profile",
    images: {
        unoptimized: true, // Disable default image optimization
        domains: ['cylin743.github.io'],
        path: '/ck-profile',
        loader:"custom",
        loaderFile:"./image-loader.js",

    },
    async rewrites() {
        return [
        {
            source: '/images/:path*',
            destination: '/ck-profile/images/:path*', // The :path parameter isn't used here so will be automatically passed in the query
        },
        ]
    },
    basePath: isDev ? '' : '/ck-profile',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    // sassOptions: {
    //     implementation: 'sass-embedded',
    // },
};
  

export default nextConfig;
