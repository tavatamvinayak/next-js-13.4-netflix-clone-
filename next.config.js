/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["image.tmdb.org"]
    },
    // // imp start

    webpack: (config, { isServer }) => {

        if (!isServer) {
            config.target = 'electron-renderer';
            config.node = {
                __dirname: true,
            }
        }
        return config;
    },

    /// // imp end
}

module.exports = nextConfig
