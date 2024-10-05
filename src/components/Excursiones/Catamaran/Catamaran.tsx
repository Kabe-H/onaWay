import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Catamaran() {
  const { language } = useLanguageStore();

  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Excursiones en Catamarán - Descubre la Belleza del Canal Beagle con
          ONA WAY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          En ONA WAY, nos dedicamos a brindarte el mejor servicio de traslados
          en Ushuaia para que disfrutes cada excursión sin preocupaciones.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Estamos contigo en cada paso del viaje, asegurando que llegues a
          tiempo a todas tus aventuras. Nuestro equipo está disponible para
          cubrir tus necesidades de transporte y ofrecerte las mejores opciones
          para que tu experiencia en Ushuaia sea inolvidable.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Si estás buscando vivir una experiencia única en el Canal Beagle, te
          ofrecemos una excursión en catamarán que te llevará a explorar los
          puntos más destacados de esta región.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Durante el recorrido, disfrutarás de impresionantes vistas panorámicas
          de la ciudad de Ushuaia mientras navegas por aguas rodeadas de
          montañas majestuosas y naturaleza virgen.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Entre los puntos de interés, visitarás la famosa Isla de Lobos, hogar
          de una gran colonia de lobos marinos que podrás observar en su hábitat
          natural.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          También pasarás por la Isla de Pájaros, donde habitan diversas
          especies de aves que llenarán el cielo con sus majestuosos vuelos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El recorrido culmina en el icónico Faro Les Eclaireurs, conocido como
          el faro del fin del mundo.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Esta estructura histórica se alza en medio de las aguas, ofreciendo
          una postal inolvidable de la Patagonia austral.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Con ONA WAY, no solo tendrás el placer de disfrutar de esta increíble
          excursión, sino que también te garantizamos la comodidad y puntualidad
          en todos tus traslados, permitiéndote concentrarte en lo que realmente
          importa: la aventura.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Passeios de Catamarã - Descubra a Beleza do Canal de Beagle com a ONA
          WAY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Na ONA WAY, estamos comprometidos em oferecer os melhores serviços de
          transporte em Ushuaia para que você aproveite cada passeio sem
          preocupações.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Estamos ao seu lado em cada etapa da jornada, garantindo que você
          chegue a todas as suas aventuras pontualmente.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Nossa equipe está disponível para atender às suas necessidades de
          transporte e oferecer as melhores opções para tornar sua experiência
          em Ushuaia inesquecível.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Se você está buscando viver uma experiência única, oferecemos um
          passeio de catamarã pelo Canal de Beagle, levando você a explorar os
          pontos mais icônicos da região.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Durante a viagem, você desfrutará de vistas panorâmicas da cidade de
          Ushuaia, navegando por águas cercadas por montanhas majestosas e
          natureza intocada.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Entre os destaques do passeio, está a visita à famosa Ilha dos Lobos,
          lar de uma grande colônia de leões-marinhos, que você poderá observar
          em seu habitat natural.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Você também passará pela Ilha dos Pássaros, onde diversas espécies de
          aves enchem o céu com seus voos majestosos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          O passeio termina no icônico Farol Les Eclaireurs, conhecido como o
          "farol do fim do mundo". Esta estrutura histórica ergue-se no meio das
          águas, oferecendo uma vista inesquecível da Patagônia Austral.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Com a ONA WAY, você não só aproveitará esse incrível passeio, como
          também garantimos conforto e pontualidade em todos os seus traslados,
          permitindo que você se concentre no que realmente importa: a aventura.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Catamaran Excursions - Discover the Beauty of the Beagle Channel with
          ONA WAY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          At ONA WAY, we are committed to providing the best transportation
          services in Ushuaia so you can enjoy every excursion without worries.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          We are with you every step of the way, ensuring that you reach all
          your adventures on time. Our team is available to meet your
          transportation needs and offer the best options to make your Ushuaia
          experience unforgettable.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          If you're looking to experience something truly unique, we offer a
          catamaran excursion through the Beagle Channel, taking you to explore
          the most iconic spots in the region.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          During the journey, you’ll enjoy panoramic views of Ushuaia as you
          sail through waters surrounded by majestic mountains and untouched
          nature.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Highlights of the tour include a visit to the famous Sea Lion Island,
          home to a large colony of sea lions that you can observe in their
          natural habitat.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          You'll also pass by Bird Island, where various species of birds fill
          the sky with their majestic flights.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The tour concludes at the iconic Les Eclaireurs Lighthouse, also known
          as the "lighthouse at the end of the world." This historic structure
          stands tall in the middle of the waters, offering a picture-perfect
          view of the southernmost tip of Patagonia.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          With ONA WAY, not only will you enjoy this incredible excursion, but
          we also guarantee comfort and punctuality in all your transfers,
          allowing you to focus on what really matters: the adventure.
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/Catamaran/BannerCatamaran.jpg"
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
          src="/Excursiones/Catamaran/1.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/Catamaran/2.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/Catamaran/3.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/Catamaran/4.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
