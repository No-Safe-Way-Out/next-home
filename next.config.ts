import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  webpack(config, { dev }) {
    if (dev) {
      config.plugins = config.plugins.filter((plugin: object) => {
        return true;
        // return plugin.constructor.name !== 'ReactFreshWebpackPlugin';
      });
    }
    return config;
  },
};

export default nextConfig;
