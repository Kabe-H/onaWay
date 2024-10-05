import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function TrenFinMundo() {
  const { language } = useLanguageStore();

  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Descubre el Tren del Fin del Mundo con ONA WAY</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          La Estación del Fin del Mundo, punto de partida de una de las
          experiencias más icónicas de Ushuaia, te invita a sumergirte en la
          historia y belleza de la región. Mientras esperas el tren, podrás
          recorrer los talleres de mantenimiento, admirar fotografías antiguas
          que relatan el pasado del lugar, adquirir recuerdos únicos en la
          tienda de souvenirs o relajarte en la confitería con una bebida
          caliente o refrescante.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El viaje en el Tren del Fin del Mundo te llevará a través de
          majestuosos bosques de lenga y ñire, vastos turbales y el serpenteante
          río Pipo.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Durante el trayecto, el tren realiza una parada en la cascada
          Macarena, donde podrás descender para disfrutar de un mirador
          panorámico que ofrece vistas impresionantes. Además, una audioguía
          disponible en siete idiomas te acompañará durante todo el recorrido,
          narrando la fascinante historia de la región.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Los vagones, equipados con amplios ventanales, aseguran que no te
          pierdas ni un detalle del impactante paisaje que te rodea, ya sea
          cubierto por la nieve invernal o teñido por los colores vibrantes del
          verano austral.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Hay opciones para todos los gustos con tres categorías de servicio:
          clase turista, primera y premium, adaptadas a diferentes necesidades y
          preferencias.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Ya sea en pleno invierno, cuando la nieve transforma el entorno en un
          paisaje de cuento, o en verano, cuando la naturaleza florece bajo el
          sol patagónico, el Tren del Fin del Mundo es una actividad ideal para
          todas las edades.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Los más pequeños se maravillarán con la magia del recorrido, mientras
          que los adultos disfrutarán de la tranquilidad y la historia que
          envuelven este viaje único.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Con ONA WAY, puedes adquirir fácilmente tus tickets para vivir esta
          experiencia inolvidable.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          ¡Prepárate para un viaje al corazón de la Patagonia!
        </Typography>
      </Grid>
    </Grid>
  );

  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Descubra o Trem do Fim do Mundo com ONA WAY</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A Estação do Fim do Mundo, ponto de partida de uma das experiências
          mais icônicas de Ushuaia, convida você a se envolver na história e na
          beleza da região. Enquanto espera pelo trem, você pode visitar as
          oficinas de manutenção, admirar fotografias antigas que contam a
          história do local, comprar lembranças exclusivas na loja de souvenirs
          ou relaxar na cafeteria com uma bebida quente ou refrescante.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A viagem no Trem do Fim do Mundo levará você por majestosas florestas
          de lengas e ñires, vastos turfeiras e o sinuoso rio Pipo. Durante o
          percurso, o trem faz uma parada na cachoeira Macarena, onde é possível
          descer para apreciar um mirante panorâmico com vistas impressionantes.
          Além disso, um audioguia disponível em sete idiomas estará com você
          durante todo o trajeto, narrando a fascinante história da região.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Os vagões, equipados com amplas janelas, garantem que você não perca
          nenhum detalhe da paisagem deslumbrante ao seu redor, seja coberta
          pela neve invernal ou pintada pelas cores vibrantes do verão austral.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Há opções para todos os gostos, com três categorias de serviço: classe
          turística, primeira classe e premium, adaptadas a diferentes
          necessidades e preferências.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Seja no pleno inverno, quando a neve transforma o cenário em uma
          paisagem de conto de fadas, ou no verão, quando a natureza floresce
          sob o sol patagônico, o Trem do Fim do Mundo é uma atividade ideal
          para todas as idades.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          As crianças ficarão encantadas com a magia do passeio, enquanto os
          adultos aproveitarão a tranquilidade e a história que envolvem essa
          viagem única.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Com a ONA WAY, você pode adquirir seus ingressos com facilidade para
          viver essa experiência inesquecível.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Prepare-se para uma viagem ao coração da Patagônia!
        </Typography>
      </Grid>
    </Grid>
  );

  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Discover the End of the World Train with ONA WAY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The End of the World Station, the starting point for one of Ushuaia’s
          most iconic experiences, invites you to immerse yourself in the
          history and beauty of the region. While you wait for the train, you
          can visit the maintenance workshops, admire old photographs that tell
          the story of the place, buy unique souvenirs at the gift shop, or
          relax at the café with a hot or cold drink.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The End of the World Train journey will take you through majestic
          forests of lenga and ñire trees, vast peat bogs, and the winding Pipo
          River. During the trip, the train makes a stop at the Macarena
          Waterfall, where you can disembark to enjoy a panoramic lookout with
          stunning views. Additionally, an audio guide available in seven
          languages will accompany you throughout the journey, narrating the
          fascinating history of the region.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The train cars, equipped with large windows, ensure that you don’t
          miss any detail of the breathtaking landscape around you, whether
          covered by winter snow or painted with the vibrant colors of the
          austral summer. There are options for every taste, with three service
          categories: tourist class, first class, and premium, tailored to
          different needs and preferences.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Whether in the heart of winter, when the snow transforms the scenery
          into a fairytale landscape, or in summer, when nature blooms under the
          Patagonian sun, the End of the World Train is an ideal activity for
          all ages.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Children will be amazed by the magic of the journey, while adults can
          enjoy the tranquility and history that surround this unique
          experience.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          With ONA WAY, you can easily purchase your tickets to live this
          unforgettable adventure.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Get ready for a journey to the heart of Patagonia!
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/TrenFinMundo/BannerTren.jpg"
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
          src="/Excursiones/TrenFinMundo/1.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrenFinMundo/2.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrenFinMundo/3.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrenFinMundo/4.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
