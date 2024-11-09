/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // Dominio de Imgur
        port: "", // Deja vacío si no hay un puerto específico
        pathname: "/**", // Permite todas las rutas bajo i.imgur.com
      },
    ],
  },
};

export default nextConfig;
