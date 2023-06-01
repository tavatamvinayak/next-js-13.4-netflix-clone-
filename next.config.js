/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["image.tmdb.org"]
    }
    ,
    eslint: { ignoreDuringBuilds: true },
   
}

module.exports = nextConfig
