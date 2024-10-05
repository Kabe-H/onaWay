import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function LagunaEsmeralda() {
  const { language } = useLanguageStore();
  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Excursión a la Laguna Esmeralda con ONA WAY</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Descubre una de las joyas más impresionantes de Tierra del Fuego con
          nuestra excursión a la Laguna Esmeralda, un destino obligado para los
          amantes de la naturaleza y el trekking. A solo 20 kilómetros al norte
          de Ushuaia, la aventura comienza en el Valle de los Lobos, famoso por
          sus paisajes agrestes y la presencia de los lobos siberianos que
          residen en la zona.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El sendero que te llevará a la Laguna Esmeralda tiene una longitud
          total de 9,6 kilómetros, y requiere entre 4 y 5 horas de caminata.
          Durante el trayecto, serás testigo de la diversidad del ecosistema
          fueguino, atravesando densos bosques de lengas y ñires, típicos de la
          región. A medida que avances, el paisaje cambiará, abriéndose paso a
          planicies de turba que forman un mosaico de colores rojos y marrones,
          característicos de este tipo de humedales.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Uno de los momentos más fascinantes de la caminata es el cruce de un
          río de aguas sorprendentemente azules, que corta el bosque y añade un
          toque místico al recorrido. Este río, alimentado por los deshielos de
          los glaciares cercanos, es una muestra de la pureza y el vigor de la
          naturaleza en esta región.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          La recompensa al esfuerzo físico llega cuando te encuentras con la
          Laguna Esmeralda, una obra maestra de la naturaleza que toma su nombre
          del impactante color verde esmeralda de sus aguas. Este color proviene
          de la sedimentación glaciar que se acumula en el fondo de la laguna y
          que, cuando la luz solar incide, crea un brillo fascinante. Rodeada
          por montañas escarpadas y con el glaciar Ojo del Albino como telón de
          fondo, la laguna parece estar abrazada por la naturaleza en su estado
          más puro. Este rincón de Tierra del Fuego, apartado de las multitudes,
          es un lugar ideal para relajarse y conectarse con el entorno.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A menudo, es posible ver cóndores sobrevolando las montañas cercanas,
          lo que agrega una experiencia aún más única al entorno natural.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          En ONA WAY, no solo nos encargamos de llevarte hasta el punto de
          inicio de este asombroso trekking, sino que te acompañamos a lo largo
          de toda la excursión, brindándote el apoyo y la asistencia necesarios
          para que disfrutes al máximo de esta experiencia.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Nos adaptamos completamente a tus necesidades y horarios, ofreciéndote
          la flexibilidad que necesites para hacer de esta excursión una
          experiencia inolvidable. ONA WAY tu compañero ideal para explorar los
          rincones más espectaculares de Ushuaia.
        </Typography>
      </Grid>
    </Grid>
  );
  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Excursão à Laguna Esmeralda com ONA WAY</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Descubra uma das joias mais impressionantes da Terra do Fogo com nossa
          excursão à Laguna Esmeralda, um destino imperdível para os amantes da
          natureza e do trekking. A apenas 20 quilômetros ao norte de Ushuaia, a
          aventura começa no Vale dos Lobos, famoso por suas paisagens rústicas
          e pela presença de lobos siberianos que habitam a região.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A trilha que leva à Laguna Esmeralda tem um total de 9,6 quilômetros e
          leva de 4 a 5 horas para ser percorrida. Durante o trajeto, você
          poderá testemunhar a diversidade do ecossistema fueguino, atravessando
          densas florestas de lengas e ñires, árvores típicas da região.
          Conforme você avança, a paisagem se transforma, dando lugar a vastas
          áreas de turfa, que formam um mosaico de tons vermelhos e marrons,
          característicos desses tipos de pântanos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Um dos momentos mais fascinantes da caminhada é a travessia de um rio
          com águas surpreendentemente azuis, que corta a floresta e adiciona um
          toque místico ao percurso. Esse rio, alimentado pelo degelo dos
          glaciares próximos, é uma amostra da pureza e força da natureza nesta
          região.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A recompensa pelo esforço físico chega quando você se depara com a
          Laguna Esmeralda, uma obra-prima da natureza que recebe seu nome da
          deslumbrante cor verde-esmeralda de suas águas. Essa tonalidade vem da
          sedimentação glacial acumulada no fundo da lagoa e, quando a luz do
          sol incide sobre ela, cria um brilho fascinante. Cercada por montanhas
          íngremes e com o glaciar Ojo del Albino ao fundo, a lagoa parece estar
          envolvida pela natureza em seu estado mais puro. Este canto remoto da
          Terra do Fogo, longe das multidões, é o local ideal para relaxar e se
          conectar com o ambiente.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Muitas vezes, é possível avistar condores sobrevoando as montanhas
          próximas, acrescentando uma experiência ainda mais única ao cenário
          natural.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Na ONA WAY, não só levamos você até o ponto de partida desta incrível
          caminhada, como também o acompanhamos durante toda a excursão,
          oferecendo o apoio e a assistência necessários para que você aproveite
          ao máximo essa experiência.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Adaptamo-nos completamente às suas necessidades e horários,
          proporcionando a flexibilidade que você precisa para tornar esta
          excursão uma experiência inesquecível. ONA WAY, seu parceiro ideal
          para explorar os cantos mais espetaculares de Ushuaia.
        </Typography>
      </Grid>
    </Grid>
  );
  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Laguna Esmeralda Excursion with ONA WAY</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Discover one of Tierra del Fuego’s most stunning gems with our Laguna
          Esmeralda excursion, a must-do for nature lovers and trekking
          enthusiasts. Located just 20 kilometers north of Ushuaia, the
          adventure begins in the Valley of the Wolves, known for its rugged
          landscapes and the Siberian wolves that inhabit the area.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The trail leading to Laguna Esmeralda stretches for a total of 9.6
          kilometers and takes about 4 to 5 hours to complete. Along the way,
          you will witness the diverse Fuegian ecosystem, hiking through dense
          forests of lenga and ñire trees, both native to the region. As you
          progress, the scenery changes dramatically, opening up to peat bogs
          that create a mosaic of red and brown hues, characteristic of these
          wetlands.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          One of the most captivating moments of the hike is crossing a river
          with surprisingly blue waters that cuts through the forest, adding a
          mystical touch to the journey. This river, fed by the melting glaciers
          nearby, is a testament to the purity and vitality of nature in this
          area.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The reward for your physical effort comes when you reach Laguna
          Esmeralda, a masterpiece of nature named after the stunning emerald
          green color of its waters. This color is caused by glacial sediment
          that settles at the bottom of the lake and, when sunlight hits it,
          creates a mesmerizing glow. Surrounded by steep mountains and with the
          Ojo del Albino glacier as a backdrop, the lagoon seems to be cradled
          by nature in its purest form. This remote corner of Tierra del Fuego,
          far from the crowds, is the perfect place to relax and reconnect with
          the natural world.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Condors often soar above the surrounding mountains, adding a unique
          and awe-inspiring touch to the natural setting.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          At ONA WAY, we don’t just take you to the starting point of this
          incredible trek—we accompany you throughout the entire excursion,
          offering the support and assistance you need to fully enjoy this
          experience.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          We adapt entirely to your needs and schedule, giving you the
          flexibility you require to make this an unforgettable adventure. ONA
          WAY, your ideal partner to explore the most spectacular corners of
          Ushuaia.
        </Typography>
      </Grid>
    </Grid>
  );
  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/LagunaEsmeralda/BannerLagunaEsmeralda.jpg"
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
          src="/Excursiones/LagunaEsmeralda/1.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/LagunaEsmeralda/2.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/LagunaEsmeralda/3.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/LagunaEsmeralda/4.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
