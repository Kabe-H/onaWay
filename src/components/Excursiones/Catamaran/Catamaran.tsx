import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const contentByLanguage = {
  es: [
    "Excursiones en Catamarán - Descubre la Belleza del Canal Beagle con ONA WAY",
    "En ONA WAY, nos dedicamos a brindarte el mejor servicio de traslados en Ushuaia para que disfrutes cada excursión sin preocupaciones.",
    "Estamos contigo en cada paso del viaje, asegurando que llegues a tiempo a todas tus aventuras. Nuestro equipo está disponible para cubrir tus necesidades de transporte y ofrecerte las mejores opciones para que tu experiencia en Ushuaia sea inolvidable.",
    "Si estás buscando vivir una experiencia única en el Canal Beagle, te ofrecemos una excursión en catamarán que te llevará a explorar los puntos más destacados de esta región.",
    "Durante el recorrido, disfrutarás de impresionantes vistas panorámicas de la ciudad de Ushuaia mientras navegas por aguas rodeadas de montañas majestuosas y naturaleza virgen.",
    "Entre los puntos de interés, visitarás la famosa Isla de Lobos, hogar de una gran colonia de lobos marinos que podrás observar en su hábitat natural.",
    "También pasarás por la Isla de Pájaros, donde habitan diversas especies de aves que llenarán el cielo con sus majestuosos vuelos.",
    "El recorrido culmina en el icónico Faro Les Eclaireurs, conocido como el 'faro del fin del mundo.' Esta estructura histórica se alza en medio de las aguas, ofreciendo una postal inolvidable de la Patagonia austral.",
    "Con ONA WAY, no solo tendrás el placer de disfrutar de esta increíble excursión, sino que también te garantizamos la comodidad y puntualidad en todos tus traslados, permitiéndote concentrarte en lo que realmente importa: la aventura.",
  ],
  pr: [
    "Passeios de Catamarã - Descubra a Beleza do Canal de Beagle com a ONA WAY",
    "Na ONA WAY, estamos comprometidos em oferecer os melhores serviços de transporte em Ushuaia para que você aproveite cada passeio sem preocupações.",
    "Estamos ao seu lado em cada etapa da jornada, garantindo que você chegue a todas as suas aventuras pontualmente.",
    "Nossa equipe está disponível para atender às suas necessidades de transporte e oferecer as melhores opções para tornar sua experiência em Ushuaia inesquecível.",
    "Se você está buscando viver uma experiência única, oferecemos um passeio de catamarã pelo Canal de Beagle, levando você a explorar os pontos mais icônicos da região.",
    "Durante a viagem, você desfrutará de vistas panorâmicas da cidade de Ushuaia, navegando por águas cercadas por montanhas majestosas e natureza intocada.",
    "Entre os destaques do passeio, está a visita à famosa Ilha dos Lobos, lar de uma grande colônia de leões-marinhos, que você poderá observar em seu habitat natural.",
    "Você também passará pela Ilha dos Pássaros, onde diversas espécies de aves enchem o céu com seus voos majestosos.",
    "O passeio termina no icônico Farol Les Eclaireurs, conhecido como o 'farol do fim do mundo'. Esta estrutura histórica ergue-se no meio das águas, oferecendo uma vista inesquecível da Patagônia Austral.",
    "Com a ONA WAY, você não só aproveitará esse incrível passeio, como também garantimos conforto e pontualidade em todos os seus traslados, permitindo que você se concentre no que realmente importa: a aventura.",
  ],
  en: [
    "Catamaran Excursions - Discover the Beauty of the Beagle Channel with ONA WAY",
    "At ONA WAY, we are committed to providing the best transportation services in Ushuaia so you can enjoy every excursion without worries.",
    "We are with you every step of the way, ensuring that you reach all your adventures on time. Our team is available to meet your transportation needs and offer the best options to make your Ushuaia experience unforgettable.",
    "If you're looking to experience something truly unique, we offer a catamaran excursion through the Beagle Channel, taking you to explore the most iconic spots in the region.",
    "During the journey, you’ll enjoy panoramic views of Ushuaia as you sail through waters surrounded by majestic mountains and untouched nature.",
    "Highlights of the tour include a visit to the famous Sea Lion Island, home to a large colony of sea lions that you can observe in their natural habitat.",
    "You'll also pass by Bird Island, where various species of birds fill the sky with their majestic flights.",
    "The tour concludes at the iconic Les Eclaireurs Lighthouse, also known as the 'lighthouse at the end of the world.' This historic structure stands tall in the middle of the waters, offering a picture-perfect view of the southernmost tip of Patagonia.",
    "With ONA WAY, not only will you enjoy this incredible excursion, but we also guarantee comfort and punctuality in all your transfers, allowing you to focus on what really matters: the adventure.",
  ],
};

export default function Catamaran() {
  const { language } = useLanguageStore();
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  const renderContent = (textArray: string[]) => (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {textArray.map((text, index) => (
        <Grid item xs={12} key={index + text.slice(0, 2)}>
          <Typography>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  );

  const bannerImages = {
    desktop: "/Excursiones/Catamaran/BannerCatamaran.jpg",
    mobile: "/Excursiones/Catamaran/3.jpg",
  };

  const excursionesImages = [
    "/Excursiones/Catamaran/1.jpg",
    "/Excursiones/Catamaran/2.jpg",
    "/Excursiones/Catamaran/3.jpg",
    "/Excursiones/Catamaran/4.jpg",
  ];

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src={isDesktop ? bannerImages.desktop : bannerImages.mobile}
            alt="Excursiones CerroCastor"
            width={isDesktop ? 1884 : 368}
            height={isDesktop ? 837 : 270}
            priority
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        {renderContent(contentByLanguage[language])}
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => window.open("https://wa.me/5492901650309?text=Hola")}
        >
          <Typography sx={{ fontSize: "30px" }}>COMPRAR</Typography>
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Image
          src="/Icons/nombreLogo.png"
          alt="Excursiones Catamaran"
          width={isDesktop ? 460 : 230}
          height={isDesktop ? 100 : 50}
          priority
        />
      </Grid>
      {excursionesImages.map((src, index) => (
        <Grid item xs={12} md={3} xl={3} key={index + src}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`Excursiones Catamaran ${index + 1}`}
              width={460}
              height={300}
              priority
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
