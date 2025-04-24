import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Support Web Workers with a more modern approach
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/chunks/[id].worker.[contenthash].js',
        publicPath: '/_next/',
      },
    });
    
    // Resolve the 'fs' module for server-side code
    if (!config.resolve) {
      config.resolve = {};
    }
    
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    
    // Add fallbacks for Node.js core modules
    Object.assign(config.resolve.fallback, {
      fs: false,
      path: false,
      os: false,
    });
    
    return config;
  },
};

export default nextConfig;
