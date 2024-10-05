import MiCard from "@/components/MiCard/MiCard";
import SiderBar from "@/components/SideBar/SiderBar";
import { IMiCard } from "@/models/MiCardModel";
import { Grid, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const image: IMiCard[] = [
    {
      id: 1,
      image: "/ImageExcursiones/paseoTren.jpg",
    },
    {
      id: 2,
      image: "/ImageExcursiones/navegacionCatamaran.jpg",
    },
    {
      id: 3,
      image: "/ImageExcursiones/cerroCastor.jpg",
    },
    {
      id: 4,
      image: "/ImageExcursiones/lagunaEsmeralda.jpg",
    },
    {
      id: 5,
      image: "/ImageExcursiones/parqueNacional.jpg",
    },
    {
      id: 6,
      image: "/ImageExcursiones/inOutHotelAeropuerto.jpg",
    },
  ];
  return (
    <main>
      <SiderBar />
      <section className={styles.sectionTitulo}>
        <Typography
          color="primary"
          sx={{
            fontFamily: "coolvetica rg",
            fontSize: "13px",
          }}
        >
          Actividades Turisticas para realizar en USHUAIA
        </Typography>
      </section>
      <Grid container>
        <MiCard element={image} />
      </Grid>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8YNBA5LauE0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
