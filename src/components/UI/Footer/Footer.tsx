"use client";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  const imagenesRedes = [
    {
      url: "https://www.instagram.com/onawaytransfer/",
      image: "https://i.imgur.com/rQwVZzy.png",
      alt: "logoInstagram",
    },
    {
      url: "",
      image: "https://i.imgur.com/a86HGcg.png",
      alt: "logoFacebook",
    },
    {
      url: "https://www.youtube.com/@OnaWay-s8k",
      image: "https://i.imgur.com/U6FtgWA.png",
      alt: "logoYouTube",
    },
  ];

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  return isDesktop ? (
    <Grid container spacing={1} component="footer">
      <Grid item xs={6} xl={4} component="section">
        <Grid container>
          {imagenesRedes.map((data) => (
            <Grid item xl={2} key={data.alt}>
              <Button onClick={() => window.open(data.url)}>
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={50}
                  height={50}
                  priority
                />
              </Button>
            </Grid>
          ))}
          <Grid item xl={12}>
            <Image
              src="/Icons/LogoOnaWayVariante.png"
              alt="LogoOnaWayVariante"
              width={250}
              height={112}
              priority
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} xl={4} component="section">
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "20px" }}>
              <b>Contactos:</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>onawayturismo@gmail.com</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>@onawey</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>+54 2901 40-6208</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "20px" }}>
              <b> Horarios de atención:</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>Lunes a Domingos </b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>08:00hs a 22:00hs</b>
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              <b>Ushuaia Argentina</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={4} component="section"></Grid>
    </Grid>
  ) : (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "13px" }}>
              <b>Contactos:</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "10px" }}>
              <b>onaweyturismo@gmail.com</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "10px" }}>
              <b>@onawey</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "10px" }}>
              <b>+54 2901 40-6208</b>
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              <b> Horarios de atención:</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "10px" }}>
              <b>Lunes a sábado</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "10px" }}>
              <b>09:00hs a 19:00hs</b>
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              <b>Ushuaia Argentina</b>
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={5}>
            <Image
              src="/Icons/LogoOnaWayVariante.png"
              alt="Vercel Logo"
              width={125}
              height={56}
              priority
            />
          </Grid>
          <Grid item xs={7}>
            {imagenesRedes.map((data) => (
              <Button key={data.alt} onClick={() => window.open(data.url)}>
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={40}
                  height={40}
                  priority
                />
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
