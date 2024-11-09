import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const contentByLanguage = {
  es: [
    "Descubre el Tren del Fin del Mundo con ONA WAY",
    "La Estación del Fin del Mundo, punto de partida de una de las experiencias más icónicas de Ushuaia, te invita a sumergirte en la historia y belleza de la región. Mientras esperas el tren, podrás recorrer los talleres de mantenimiento, admirar fotografías antiguas que relatan el pasado del lugar, adquirir recuerdos únicos en la tienda de souvenirs o relajarte en la confitería con una bebida caliente o refrescante.",
    "El viaje en el Tren del Fin del Mundo te llevará a través de majestuosos bosques de lenga y ñire, vastos turbales y el serpenteante río Pipo.",
    "Durante el trayecto, el tren realiza una parada en la cascada Macarena, donde podrás descender para disfrutar de un mirador panorámico que ofrece vistas impresionantes. Además, una audioguía disponible en siete idiomas te acompañará durante todo el recorrido, narrando la fascinante historia de la región.",
    "Los vagones, equipados con amplios ventanales, aseguran que no te pierdas ni un detalle del impactante paisaje que te rodea, ya sea cubierto por la nieve invernal o teñido por los colores vibrantes del verano austral.",
    "Hay opciones para todos los gustos con tres categorías de servicio: clase turista, primera y premium, adaptadas a diferentes necesidades y preferencias.",
    "Ya sea en pleno invierno, cuando la nieve transforma el entorno en un paisaje de cuento, o en verano, cuando la naturaleza florece bajo el sol patagónico, el Tren del Fin del Mundo es una actividad ideal para todas las edades. ",
    "Los más pequeños se maravillarán con la magia del recorrido, mientras que los adultos disfrutarán de la tranquilidad y la historia que envuelven este viaje único.",
    "Con ONA WAY, puedes adquirir fácilmente tus tickets para vivir esta experiencia inolvidable. ",
    "¡Prepárate para un viaje al corazón de la Patagonia!",
  ],
  pr: [
    "Descubra o Trem do Fim do Mundo com ONA WAY",
    "A Estação do Fim do Mundo, ponto de partida de uma das experiências mais icônicas de Ushuaia, convida você a se envolver na história e na beleza da região. Enquanto espera pelo trem, você pode visitar as oficinas de manutenção, admirar fotografias antigas que contam a história do local, comprar lembranças exclusivas na loja de souvenirs ou relaxar na cafeteria com uma bebida quente ou refrescante. ",
    "A viagem no Trem do Fim do Mundo levará você por majestosas florestas de lengas e ñires, vastos turfeiras e o sinuoso rio Pipo.",
    "Durante o percurso, o trem faz uma parada na cachoeira Macarena, onde é possível descer para apreciar um mirante panorâmico com vistas impressionantes. Além disso, um audioguia disponível em sete idiomas estará com você durante todo o trajeto, narrando a fascinante história da região. ",
    "Os vagões, equipados com amplas janelas, garantem que você não perca nenhum detalhe da paisagem deslumbrante ao seu redor, seja coberta pela neve invernal ou pintada pelas cores vibrantes do verão austral. ",
    "Há opções para todos os gostos, com três categorias de serviço: classe turística, primeira classe e premium, adaptadas a diferentes necessidades e preferências. ",
    "Seja no pleno inverno, quando a neve transforma o cenário em uma paisagem de conto de fadas, ou no verão, quando a natureza floresce sob o sol patagônico, o Trem do Fim do Mundo é uma atividade ideal para todas as idades. ",
    "As crianças ficarão encantadas com a magia do passeio, enquanto os adultos aproveitarão a tranquilidade e a história que envolvem essa viagem única. ",
    "Com a ONA WAY, você pode adquirir seus ingressos com facilidade para viver essa experiência inesquecível. ",
    "Prepare-se para uma viagem ao coração da Patagônia!",
  ],
  en: [
    "The End of the World Train journey will take you through majestic forests of lenga and ñire trees, vast peat bogs, and the winding Pipo River. During the trip, the train makes a stop at the Macarena Waterfall, where you can disembark to enjoy a panoramic lookout with stunning views. Additionally, an audio guide available in seven languages will accompany you throughout the journey, narrating the fascinating history of the region.",

    "The train cars, equipped with large windows, ensure that you don’t miss any detail of the breathtaking landscape around you, whether covered by winter snow or painted with the vibrant colors of the austral summer. There are options for every taste, with three service categories: tourist class, first class, and premium, tailored to different needs and preferences.",

    "Whether in the heart of winter, when the snow transforms the scenery into a fairytale landscape, or in summer, when nature blooms under the Patagonian sun, the End of the World Train is an ideal activity for all ages.",

    "Children will be amazed by the magic of the journey, while adults can enjoy the tranquility and history that surround this unique experience.",

    "With ONA WAY, you can easily purchase your tickets to live this unforgettable adventure.",

    "Get ready for a journey to the heart of Patagonia!",
  ],
};

export default function TrenFinMundo() {
  const { language } = useLanguageStore();
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  const renderContent = (textArray: string[]) => (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {textArray.map((text, index) => (
        <Grid item xs={12} key={index + text.slice(0, 1)}>
          <Typography>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  );

  const bannerImages = {
    desktop: "/Excursiones/TrenFinMundo/BannerTren.jpg",
    mobile: "/Excursiones/TrenFinMundo/3.jpg",
  };

  const excursionesImages = [
    "/Excursiones/TrenFinMundo/1.jpg",
    "/Excursiones/TrenFinMundo/2.jpg",
    "/Excursiones/TrenFinMundo/3.jpg",
    "/Excursiones/TrenFinMundo/4.jpg",
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
          alt="Excursiones CerroCastor"
          width={isDesktop ? 460 : 230}
          height={isDesktop ? 100 : 50}
          priority
        />
      </Grid>
      {excursionesImages.map((src, index) => (
        <Grid item xs={12} xl={3} key={index + src}>
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
              alt={`Excursiones CerroCastor ${index + 1}`}
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
