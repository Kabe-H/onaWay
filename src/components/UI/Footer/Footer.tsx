"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? (
    <Grid container spacing={1} component="footer">
      <Grid item xs={6} xl={4} component="section">
        <Grid container>
          <Grid item xl={2}>
            <Image
              src="/LogoRedes/logoInstagram.png"
              alt="logoInstagram"
              width={50}
              height={50}
              priority
            />
          </Grid>
          <Grid item xl={2}>
            <Image
              src="/LogoRedes/logoFacebook.png"
              alt="logoFacebook"
              width={50}
              height={50}
              priority
            />
          </Grid>
          <Grid item xl={2}>
            <Image
              src="/LogoRedes/logoYouTube.png"
              alt="logoYouTube"
              width={50}
              height={50}
              priority
            />
          </Grid>
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
              <b>onaweyturismo@gmail.com</b>
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
              <b>Lunes a sábado</b>
            </Typography>
            <Typography color="primary" sx={{ fontSize: "15px" }}>
              <b>09:00hs a 19:00hs</b>
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
            <Image
              src="/LogoRedes/logoInstagram.png"
              alt="Vercel Logo"
              width={40}
              height={40}
              priority
            />

            <Image
              src="/LogoRedes/logoFacebook.png"
              alt="Vercel Logo"
              width={40}
              height={40}
              priority
            />

            <Image
              src="/LogoRedes/logoYouTube.png"
              alt="Vercel Logo"
              width={40}
              height={40}
              priority
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
