import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const contentByLanguage = {
  es: [
    "Descubre el Cerro Castor con ONA WAY: La Aventura Invernal en el Fin del Mundo",
    "A solo 26 km de Ushuaia, el Cerro Castor es el centro de esquí más austral del planeta, un destino inigualable para los amantes del invierno.",
    "Con cumbres que alcanzan los 1.057 metros sobre el nivel del mar, este lugar ofrece las mejores condiciones para disfrutar de la nieve desde mediados de junio hasta octubre, con la temporada más extensa del hemisferio sur.",
    "En este increíble centro, encontrarás una amplia variedad de actividades y excursiones para todos los niveles, desde esquiadores principiantes hasta expertos.",
    "Disfruta de sus pistas de esquí y snowboard, caminatas con raquetas, clases para todas las edades, y travesías en motos de nieve o paseos en trineo para quienes buscan emociones más intensas.",
    "Su infraestructura de primer nivel incluye 34 pistas, 12 medios de elevación, y servicios que garantizan una experiencia segura y cómoda.",
    "También podrás relajarte en sus acogedores refugios y restaurantes, donde te esperan vistas panorámicas y sabores patagónicos únicos.",
    "ONA WAY hace que tu experiencia sea aún más cómoda, con traslados directos desde tu hotel en Ushuaia hasta este paraíso invernal.",
    "No tendrás que preocuparte por nada, solo disfrutar del paisaje y la aventura.",
    "Vive la magia del Cerro Castor con ONA WAY, donde la naturaleza, el confort y la aventura se unen para crear recuerdos inolvidables.",
  ],
  pr: [
    "Descubra o Cerro Castor com a ONA WAY: Aventura de Inverno no Fim do Mundo",
    "A apenas 26 km de Ushuaia, o Cerro Castor é o centro de esqui mais austral do mundo, oferecendo uma experiência incomparável para os amantes do inverno.",
    "Com picos que chegam a 1.057 metros acima do nível do mar, esse destino proporciona as melhores condições para curtir a neve de meados de junho até outubro, contando com a temporada mais longa do hemisfério sul.",
    "Neste incrível centro, você encontrará uma variedade de atividades e excursões para todos os níveis, desde iniciantes até esquiadores experientes.",
    "Desfrute de pistas de esqui e snowboard, trilhas com raquetes de neve, aulas para todas as idades, além de passeios de moto de neve ou trenós para quem busca mais emoção.",
    "A infraestrutura de primeira linha inclui 34 pistas, 12 meios de elevação e serviços que garantem uma experiência segura e confortável.",
    "Para relaxar, os refúgios e restaurantes oferecem vistas panorâmicas e pratos típicos da Patagônia.",
    "Com a ONA WAY, sua experiência será ainda mais tranquila, pois oferecemos transporte direto do seu hotel em Ushuaia até esse paraíso de inverno.",
    "Você não precisa se preocupar com nada, apenas aproveitar a paisagem e a aventura.",
    "Viva a magia do Cerro Castor com a ONA WAY, onde natureza, conforto e aventura se unem para criar lembranças inesquecíveis.",
  ],
  en: [
    "Discover Cerro Castor with ONA WAY: Your Winter Adventure at the End of the World",
    "Just 16 miles from Ushuaia, Cerro Castor is the southernmost ski resort in the world, offering an unbeatable experience for winter lovers.",
    "With peaks reaching 3,465 feet above sea level, this destination provides the best snow conditions from mid-June to October, boasting the longest ski season in the southern hemisphere.",
    "At this amazing resort, you'll find a wide range of activities and tours for all skill levels, from beginners to seasoned skiers.",
    "Enjoy skiing and snowboarding on various slopes, snowshoeing trails, lessons for all ages, and thrilling snowmobile rides or sledding for those seeking more excitement.",
    "The top-notch infrastructure includes 34 trails, 12 lifts, and services that ensure a safe and comfortable experience. For relaxation, cozy lodges and restaurants offer panoramic views and delicious Patagonian dishes.",
    "With ONA WAY, your trip is made even easier, as we offer direct transportation from your hotel in Ushuaia to this winter paradise.",
    "You won’t have to worry about a thing. Just take in the scenery and enjoy the adventure.",
    "Experience the magic of Cerro Castor with ONA WAY, where nature, comfort, and adventure come together to create unforgettable memories.",
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
        <Grid item xs={12} key={index + text.slice(0, 2)}>
          <Typography>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  );

  const bannerImages = {
    desktop: "/Excursiones/CerroCastor/BannerCerroCastor.jpg",
    mobile: "/Excursiones/CerroCastor/4.jpg",
  };

  const excursionesImages = [
    "/Excursiones/CerroCastor/1.jpg",
    "/Excursiones/CerroCastor/2.jpg",
    "/Excursiones/CerroCastor/3.jpg",
    "/Excursiones/CerroCastor/4.jpg",
  ];

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        {" "}
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
              alt={`Excursiones CerroCastor ${index + 1}`}
              width={460}
              height={300}
              priority
            />{" "}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
