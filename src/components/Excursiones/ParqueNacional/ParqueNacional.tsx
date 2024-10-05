import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function ParqueNacional() {
  const { language } = useLanguageStore();

  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Parque Nacional Tierra del Fuego</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El Parque Nacional Tierra del Fuego es una joya natural ubicada en el
          extremo sur de Argentina, muy cerca de Ushuaia, la ciudad más austral
          del mundo. Este parque, creado en 1960, protege más de 68,909
          hectáreas de paisajes espectaculares que incluyen montañas
          majestuosas, bosques densos, ríos cristalinos, lagos y costas marinas.
          Su posición geográfica única, donde la Cordillera de los Andes se
          encuentra con el océano, le otorga una belleza y biodiversidad
          excepcionales, convirtiéndolo en un destino imperdible para quienes
          buscan la aventura y la conexión con la naturaleza.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El parque es famoso por su geografía variada: montañas escarpadas,
          valles formados por glaciares y una costa recortada por bahías y
          fiordos. Los bosques subantárticos de lengas, ñires y guindos dominan
          el paisaje, ofreciendo un entorno ideal para una fauna variada, como
          el zorro colorado fueguino y diversas especies de aves. Los lagos
          Fagnano y Roca se destacan por sus aguas cristalinas, que reflejan las
          imponentes montañas circundantes, creando postales inolvidables.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          El clima en el Parque Nacional Tierra del Fuego es frío y húmedo
          durante todo el año. Las temperaturas de verano pueden alcanzar los
          15°C, mientras que en invierno descienden por debajo de los 0°C,
          cubriendo el paisaje con nieve. Las constantes precipitaciones
          contribuyen a la exuberancia de su vegetación. El parque se encuentra
          a tan solo 12 kilómetros de Ushuaia, lo que facilita el acceso tanto
          para visitantes locales como internacionales.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          ONA WAY se especializa en ofrecer traslados cómodos y seguros para
          disfrutar al máximo de todas las maravillas del Parque Nacional Tierra
          del Fuego y la ciudad de Ushuaia. Somos un equipo con experiencia,
          comprometido con la seguridad y el confort de nuestros pasajeros en
          cada trayecto y excursión que realizamos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Ofrecemos traslados desde y hacia el parque, además de excursiones
          guiadas durante todo el año, para que puedas disfrutar de sus paisajes
          sin importar la temporada. Nuestro personal capacitado asegura un
          transporte seguro y eficiente, garantizando que tu experiencia sea
          inolvidable desde el momento en que te recogemos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Trabajamos los 365 días del año, asegurando que, sin importar la
          estación, puedas vivir la experiencia más austral del mundo.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Parque Nacional da Terra do Fogo</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          O Parque Nacional da Terra do Fogo é uma joia natural localizada no
          extremo sul da Argentina, perto de Ushuaia, a cidade mais austral do
          mundo. Criado em 1960, o parque protege mais de 68.909 hectares de
          paisagens deslumbrantes que incluem montanhas imponentes, florestas
          densas, rios cristalinos, lagos e costas recortadas. Sua localização
          geográfica única, onde a Cordilheira dos Andes encontra o oceano, lhe
          confere uma beleza e biodiversidade excepcionais, tornando-o um
          destino imperdível para quem busca aventura e uma profunda conexão com
          a natureza.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          O parque é famoso por sua geografia variada: montanhas íngremes, vales
          esculpidos por geleiras e uma costa recortada por baías e fiordes. As
          florestas subantárticas de lenga, ñire e guindo dominam a paisagem,
          criando um habitat ideal para uma variedade de fauna, como a raposa
          colorada e diversas espécies de aves. Os lagos Fagnano e Roca se
          destacam por suas águas cristalinas que refletem as imponentes
          montanhas ao redor, criando vistas de cartão-postal.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          O clima no Parque Nacional da Terra do Fogo é frio e úmido durante
          todo o ano. As temperaturas de verão podem atingir 15°C, enquanto no
          inverno caem abaixo de 0°C, cobrindo a paisagem com neve. A constante
          precipitação contribui para a vegetação exuberante do parque. O parque
          está convenientemente localizado a apenas 12 quilômetros de Ushuaia,
          facilitando o acesso tanto para visitantes locais quanto
          internacionais.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          A ONA WAY é especializada em oferecer transportes confortáveis e
          seguros para que você possa aproveitar ao máximo todas as maravilhas
          do Parque Nacional da Terra do Fogo e da cidade de Ushuaia. Nossa
          equipe experiente é dedicada a garantir a segurança e o conforto dos
          nossos passageiros em cada viagem e excursão que realizamos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Oferecemos transfers de ida e volta para o parque, além de excursões
          guiadas durante todo o ano, para que você possa desfrutar das
          paisagens do parque, independentemente da estação. Nossa equipe
          treinada garante um transporte seguro e eficiente, garantindo que sua
          experiência seja inesquecível desde o momento em que o buscamos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Operamos 365 dias por ano, garantindo que, independentemente da época,
          você possa vivenciar a aventura mais austral do mundo.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>Tierra del Fuego National Park</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Tierra del Fuego National Park is a natural gem located at the
          southernmost tip of Argentina, just outside Ushuaia, the world’s
          southernmost city. Established in 1960, this park spans over 68,909
          hectares of breathtaking landscapes that include towering mountains,
          dense forests, crystal-clear rivers, lakes, and rugged coastlines. Its
          unique geographic location, where the Andes Mountains meet the ocean,
          gives it unparalleled beauty and biodiversity, making it a must-visit
          destination for those seeking adventure and a deep connection with
          nature.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The park is renowned for its diverse geography: steep mountains,
          glacier-carved valleys, and a coastline dotted with bays and fjords.
          The subantarctic forests of lenga, ñire, and guindo trees dominate the
          scenery, creating an ideal habitat for a variety of wildlife, such as
          the Andean fox and numerous bird species. Fagnano and Roca lakes stand
          out with their crystal-clear waters that reflect the surrounding
          majestic mountains, creating postcard-perfect views.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          The climate in Tierra del Fuego National Park is cold and humid
          throughout the year. Summer temperatures can reach 15°C (59°F), while
          in winter, they often drop below 0°C (32°F), covering the landscape in
          snow. Frequent rainfall supports the park’s lush vegetation. The park
          is conveniently located just 12 kilometers (7.5 miles) from Ushuaia,
          making it easily accessible for both local and international visitors.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          ONA WAY specializes in providing comfortable and safe transportation
          to fully enjoy all the wonders of Tierra del Fuego National Park and
          the city of Ushuaia. Our experienced team is dedicated to ensuring the
          safety and comfort of our passengers on every trip and excursion we
          offer.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          We provide transfers to and from the park, as well as guided tours
          throughout the year, so you can enjoy the park’s scenery no matter the
          season. Our trained staff ensures safe and efficient transport,
          guaranteeing that your experience will be unforgettable from the
          moment we pick you up.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          We operate 365 days a year, ensuring that no matter the time of year,
          you can experience the southernmost adventure in the world.
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/ParqueNacional/BannerParqueNacional.jpg"
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
          src="/Excursiones/ParqueNacional/1.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/ParqueNacional/2.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/ParqueNacional/3.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/ParqueNacional/4.jpg"
          alt="Excursiones CerroCastor"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
