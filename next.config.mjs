import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.alias['mini-css-extract-plugin'] = resolve('mini-css-extract-plugin');
        }
        return config;
      },
};

export default nextConfig;
