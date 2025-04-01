/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/ck-profile",
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
