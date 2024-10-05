import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/Theme";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import { Divider, IconButton } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ona Way",
  description:
    "Página para poder contratar excursiones para la empresa Ona Way",
  icons: "/Icons/Logo.png",
  authors: {
    url: "https://www.linkedin.com/in/kabe-heredia/",
    name: "Pablo Mathias Heredia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Divider
              sx={{
                backgroundColor: "black",

                mb: 2,
                width: "100%",
              }}
            />
            {children}
            <IconButton style={{ position: "fixed", top: "90%", right: 0 }}>
              <Image
                src="/LogoRedes/LogoWhatsApp.png"
                alt="Whatsapp Logo"
                width={60}
                height={60}
                priority
              />
            </IconButton>
            <Divider
              sx={{
                backgroundColor: "black",
                mt: 2,
                mb: 2,
                width: "100%",
              }}
            />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
