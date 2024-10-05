import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function CerroCastor() {
  const { language } = useLanguageStore();
  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Descubre el Cerro Castor con ONA WAY: La Aventura Invernal en el Fin
          del Mundo.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A solo 26 km de Ushuaia, el Cerro Castor es el centro de esquí más
          austral del planeta, un destino inigualable para los amantes del
          invierno. Con cumbres que alcanzan los 1.057 metros sobre el nivel del
          mar, este lugar ofrece las mejores condiciones para disfrutar de la
          nieve desde mediados de junio hasta octubre, con la temporada más
          extensa del hemisferio sur.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          En este increíble centro, encontrarás una amplia variedad de
          actividades y excursiones para todos los niveles, desde esquiadores
          principiantes hasta expertos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Disfruta de sus pistas de esquí y snowboard, caminatas con raquetas,
          clases para todas las edades, y travesías en motos de nieve o paseos
          en trineo para quienes buscan emociones más intensas.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Su infraestructura de primer nivel incluye 34 pistas, 12 medios de
          elevación, y servicios que garantizan una experiencia segura y cómoda.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          También podrás relajarte en sus acogedores refugios y restaurantes,
          donde te esperan vistas panorámicas y sabores patagónicos únicos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          ONA WAY hace que tu experiencia sea aún más cómoda, con traslados
          directos desde tu hotel en Ushuaia hasta este paraíso invernal. No
          tendrás que preocuparte por nada, solo disfrutar del paisaje y la
          aventura.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Vive la magia del Cerro Castor con ONA WAY, donde la naturaleza, el
          confort y la aventura se unen para crear recuerdos inolvidables.
        </Typography>
      </Grid>
    </Grid>
  );
  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Descubra o Cerro Castor com a ONA WAY: Aventura de Inverno no Fim do
          Mundo
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A apenas 26 km de Ushuaia, o Cerro Castor é o centro de esqui mais
          austral do mundo, oferecendo uma experiência incomparável para os
          amantes do inverno.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Com picos que chegam a 1.057 metros acima do nível do mar, esse
          destino proporciona as melhores condições para curtir a neve de meados
          de junho até outubro, contando com a temporada mais longa do
          hemisfério sul.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Neste incrível centro, você encontrará uma variedade de atividades e
          excursões para todos os níveis, desde iniciantes até esquiadores
          experientes.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Desfrute de pistas de esqui e snowboard, trilhas com raquetes de neve,
          aulas para todas as idades, além de passeios de moto de neve ou trenós
          para quem busca mais emoção.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A infraestrutura de primeira linha inclui 34 pistas, 12 meios de
          elevação e serviços que garantem uma experiência segura e confortável.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Para relaxar, os refúgios e restaurantes oferecem vistas panorâmicas e
          pratos típicos da Patagônia.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Com a ONA WAY, sua experiência será ainda mais tranquila, pois
          oferecemos transporte direto do seu hotel em Ushuaia até esse paraíso
          de inverno.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Você não precisa se preocupar com nada, apenas aproveitar a paisagem e
          a aventura.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Viva a magia do Cerro Castor com a ONA WAY, onde natureza, conforto e
          aventura se unem para criar lembranças inesquecíveis.
        </Typography>
      </Grid>
    </Grid>
  );
  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Discover Cerro Castor with ONA WAY: Your Winter Adventure at the End
          of the World
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Just 16 miles from Ushuaia, Cerro Castor is the southernmost ski
          resort in the world, offering an unbeatable experience for winter
          lovers.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Just 16 miles from Ushuaia, Cerro Castor is the southernmost ski
          resort in the world, offering an unbeatable experience for winter
          lovers.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          At this amazing resort, you'll find a wide range of activities and
          tours for all skill levels, from beginners to seasoned skiers.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Enjoy skiing and snowboarding on various slopes, snowshoeing trails,
          lessons for all ages, and thrilling snowmobile rides or sledding for
          those seeking more excitement.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The top-notch infrastructure includes 34 trails, 12 lifts, and
          services that ensure a safe and comfortable experience. For
          relaxation, cozy lodges and restaurants offer panoramic views and
          delicious Patagonian dishes.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          With ONA WAY, your trip is made even easier, as we offer direct
          transportation from your hotel in Ushuaia to this winter paradise.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          You won’t have to worry about a thing. Just take in the scenery and
          enjoy the adventure.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Experience the magic of Cerro Castor with ONA WAY, where nature,
          comfort, and adventure come together to create unforgettable memories.
        </Typography>
      </Grid>
    </Grid>
  );
  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/CerroCastor/BannerCerroCastor.jpg"
          alt="Excursiones CerroCastor"
          width={1884}
          height={837}
          priority
        />
      </Grid>
      <Grid item xs={12}>
        {language == "es" && textoEs}
        {language == "pr" && textoPr}
        {language == "en" && textoEn}
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button color="primary" variant="contained" sx={{ width: "500px" }}>
          COMPRAR
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Image
          src="/Icons/nombreLogo.png"
          alt="Excursiones CerroCastor"
          width={460}
          height={100}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/CerroCastor/1.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/CerroCastor/2.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/CerroCastor/3.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/CerroCastor/4.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
