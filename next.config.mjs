/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "989xlmfo",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skkBiKWziqup1pdDe0lwmjIxzIJqks2foLta1HUyAMw93f9n159glnoY4PRI64gFh6RqooAY474ldPCi5alK58OCBX0O6kcazQbGHChhWDQLobUsTPY8DHUQLzdgqUjJEcFjJgYq1XH4PWf0CM6bszqxUs0VlhTBuOZZNFckgoPT6AXl23FW",
  },
};

export default nextConfig;
