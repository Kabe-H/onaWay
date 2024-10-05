import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function TrasladoAeropuerto() {
  const { language } = useLanguageStore();

  const textoEs = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          En ONA WAY, comprendemos que cada detalle cuenta cuando se trata de un
          viaje, y queremos asegurarnos de que tu experiencia sea perfecta desde
          el primer momento. Sabemos que llegar a un nuevo destino puede ser un
          desafío, pero con nosotros, puedes relajarte desde el instante en que
          aterrizas en Ushuaia. Nos especializamos en ofrecer traslados
          confiables y personalizados entre el aeropuerto y tu hotel,
          garantizando un servicio puntual, cómodo y eficiente, para que no
          tengas que preocuparte por nada más que disfrutar.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Somos una empresa joven, llena de entusiasmo, con una clara visión:
          brindarte una atención excepcional basada en la empatía y el
          compromiso con cada cliente. Creemos firmemente en la importancia de
          escuchar y entender las necesidades de cada viajero, por eso nuestro
          equipo se esfuerza por ofrecer un servicio de traslados que no solo te
          lleve de un punto a otro, sino que haga que cada trayecto sea parte de
          tu experiencia en esta tierra mágica. Tanto si vienes solo, con tu
          pareja, familia o en un grupo grande, ONA WAY está preparado para
          recibirte y acompañarte en tu viaje.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Nuestros traslados incluyen tanto in-out entre el aeropuerto y tu
          hotel, como el traslado a cualquier lugar dentro y fuera de la ciudad.
          No solo cubrimos las rutas tradicionales, sino que también te llevamos
          a las excursiones más destacadas de Ushuaia. Desde el majestuoso
          Parque Nacional Tierra del Fuego, pasando por las costas del Canal
          Beagle, hasta el inolvidable Tren del Fin del Mundo, nuestro equipo de
          conductores locales conoce cada rincón y se asegura de que llegues a
          tiempo y sin contratiempos, disfrutando del camino tanto como del
          destino.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Una de nuestras ventajas es la flexibilidad. Ofrecemos traslados tanto
          para grupos pequeños como grandes, adaptándonos a tus necesidades y
          preferencias. Ya sea que estés planeando una excursión en familia, una
          salida con amigos o un viaje corporativo, nosotros estamos aquí para
          hacer que tu traslado sea cómodo y seguro, con vehículos modernos y
          equipados para brindarte la mejor experiencia.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Además, en ONA WAY nos enorgullecemos de ofrecer un servicio cercano y
          accesible, siempre con una sonrisa y con la disposición de hacer que
          tu estancia en Ushuaia sea memorable desde el primer momento. Con
          nuestro equipo, no solo obtendrás un traslado, sino la tranquilidad de
          saber que cuentas con una empresa que pone tu comodidad y satisfacción
          en primer lugar.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Déjanos encargarnos de tu traslado mientras te sumerges en las
          maravillas de Ushuaia. Con ONA WAY, cada kilómetro recorrido es una
          parte más de tu aventura.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoPr = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          Na ONA WAY, entendemos que cada detalhe faz a diferença quando se
          trata de viajar, e queremos garantir que sua experiência seja perfeita
          desde o primeiro momento. Sabemos que chegar a um novo destino pode
          ser desafiador, mas com a gente você pode relaxar assim que aterrissar
          em Ushuaia. Somos especializados em oferecer traslados confiáveis e
          personalizados entre o aeroporto e o seu hotel, garantindo um serviço
          pontual, confortável e eficiente, para que você só precise se
          preocupar em aproveitar sua viagem.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Somos uma empresa jovem e cheia de entusiasmo, com uma visão clara:
          oferecer um atendimento excepcional, baseado na empatia e no
          compromisso com cada cliente. Acreditamos na importância de ouvir e
          entender as necessidades de cada viajante, por isso nossa equipe se
          empenha em proporcionar um serviço de traslado que não apenas leve
          você de um ponto a outro, mas que transforme cada trajeto em parte da
          sua experiência nesta terra mágica. Seja você um viajante solo, com um
          parceiro, família ou um grupo grande, a ONA WAY está pronta para te
          receber e acompanhar durante toda a sua aventura.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Nossos serviços incluem traslados entre o aeroporto e seu hotel, além
          de transporte para qualquer lugar dentro e fora da cidade. Não nos
          limitamos às rotas tradicionais: também te levamos para as excursões
          mais incríveis de Ushuaia. Desde o deslumbrante Parque Nacional da
          Terra do Fogo e as margens do Canal Beagle, até o inesquecível Trem do
          Fim do Mundo, nossa equipe de motoristas locais conhece cada canto da
          região, garantindo que você chegue no horário, sem complicações,
          aproveitando tanto o caminho quanto o destino.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Uma das nossas maiores vantagens é a flexibilidade. Oferecemos
          traslados para grupos pequenos e grandes, adaptando nossos serviços às
          suas necessidades e preferências. Se você está planejando uma excursão
          em família, uma viagem com amigos ou um evento corporativo, estamos
          aqui para garantir que o seu transporte seja confortável e seguro, com
          veículos modernos e equipados para proporcionar a melhor experiência.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Além disso, na ONA WAY, temos orgulho de oferecer um atendimento
          próximo e acessível, sempre com um sorriso e a disposição de tornar
          sua estadia em Ushuaia inesquecível desde o primeiro momento. Com
          nossa equipe, você não está apenas contratando um traslado, mas
          ganhando a tranquilidade de saber que está nas mãos de uma empresa que
          prioriza seu conforto e satisfação.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Deixe que a gente cuide dos seus traslados enquanto você se aventura
          pelas maravilhas de Ushuaia. Com a ONA WAY, cada quilômetro percorrido
          se torna parte da sua jornada.
        </Typography>
      </Grid>
    </Grid>
  );

  const textoEn = (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Typography>
          At ONA WAY, we understand that every detail matters when it comes to
          travel, and we want to ensure your experience is flawless from the
          very first moment. We know that arriving in a new destination can be
          challenging, but with us, you can relax as soon as you land in
          Ushuaia. We specialize in offering reliable and personalized transfers
          between the airport and your hotel, providing punctual, comfortable,
          and efficient service so you can focus on enjoying your trip.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          We are a young and enthusiastic company with a clear vision: to
          provide exceptional service based on empathy and a strong commitment
          to every client. We believe in the importance of listening to and
          understanding the needs of each traveler. That’s why our team strives
          to offer a transfer service that not only gets you from point A to
          point B, but also makes each journey a part of your overall experience
          in this magical land. Whether you're traveling solo, with a partner,
          family, or a larger group, ONA WAY is ready to welcome you and
          accompany you on your adventure.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Our services include airport-to-hotel transfers as well as
          transportation to any location within and outside the city. We don’t
          just cover the standard routes—we also take you to the most popular
          excursions in Ushuaia. From the breathtaking Tierra del Fuego National
          Park and the shores of the Beagle Channel to the unforgettable End of
          the World Train, our team of local drivers knows every corner of the
          area and ensures you arrive on time and without hassle, enjoying the
          journey as much as the destination.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          One of our key advantages is flexibility. We offer transfers for both
          small and large groups, tailoring our services to meet your needs and
          preferences. Whether you’re planning a family excursion, a trip with
          friends, or a corporate event, we’re here to make sure your
          transportation is comfortable and safe, with modern vehicles equipped
          to provide the best experience.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          At ONA WAY, we take pride in offering friendly and accessible service,
          always with a smile and a commitment to making your stay in Ushuaia
          memorable from the very start. With our team, you're not just getting
          a ride—you’re gaining peace of mind knowing you're in the hands of a
          company that puts your comfort and satisfaction first.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Let us handle your transfers while you dive into the wonders of
          Ushuaia. With ONA WAY, every mile you travel becomes part of your
          adventure.
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src="/Excursiones/TrasladoAeropuerto/BannerTrasladoAeroupuerto.jpg"
          alt="BannerTrasladoAeroupuerto"
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
          alt="nombreLogo"
          width={460}
          height={100}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrasladoAeropuerto/1.jpg"
          alt="TrasladoAeropuerto1"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrasladoAeropuerto/2.jpg"
          alt="TrasladoAeropuerto2"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrasladoAeropuerto/3.jpg"
          alt="TrasladoAeropuerto3"
          width={460}
          height={300}
          priority
        />
      </Grid>
      <Grid item xs={3}>
        <Image
          src="/Excursiones/TrasladoAeropuerto/4.jpg"
          alt="TrasladoAeropuerto4"
          width={460}
          height={300}
          priority
        />
      </Grid>
    </Grid>
  );
}
