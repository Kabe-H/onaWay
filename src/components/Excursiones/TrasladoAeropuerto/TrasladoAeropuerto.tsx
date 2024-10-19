import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const contentByLanguage = {
  en: [
    "At ONA WAY, we understand that every detail matters when it comes to travel, and we want to ensure your experience is flawless from the very first moment. We know that arriving in a new destination can be challenging, but with us, you can relax as soon as you land in Ushuaia. We specialize in offering reliable and personalized transfers between the airport and your hotel, providing punctual, comfortable, and efficient service so you can focus on enjoying your trip.",

    "We are a young and enthusiastic company with a clear vision: to provide exceptional service based on empathy and a strong commitment to every client. We believe in the importance of listening to and understanding the needs of each traveler. That’s why our team strives to offer a transfer service that not only gets you from point A to point B, but also makes each journey a part of your overall experience in this magical land. Whether you're traveling solo, with a partner, family, or a larger group, ONA WAY is ready to welcome you and accompany you on your adventure.",

    "Our services include airport-to-hotel transfers as well as transportation to any location within and outside the city. We don’t just cover the standard routes—we also take you to the most popular excursions in Ushuaia. From the breathtaking Tierra del Fuego National Park and the shores of the Beagle Channel to the unforgettable End of the World Train, our team of local drivers knows every corner of the area and ensures you arrive on time and without hassle, enjoying the journey as much as the destination.",

    "One of our key advantages is flexibility. We offer transfers for both small and large groups, tailoring our services to meet your needs and preferences. Whether you’re planning a family excursion, a trip with friends, or a corporate event, we’re here to make sure your transportation is comfortable and safe, with modern vehicles equipped to provide the best experience.",

    "At ONA WAY, we take pride in offering friendly and accessible service, always with a smile and a commitment to making your stay in Ushuaia memorable from the very start. With our team, you're not just getting a ride—you’re gaining peace of mind knowing you're in the hands of a company that puts your comfort and satisfaction first.",

    "Let us handle your transfers while you dive into the wonders of Ushuaia. With ONA WAY, every mile you travel becomes part of your adventure.",
  ],
  pr: [
    "Na ONA WAY, entendemos que cada detalhe faz a diferença quando se trata de viajar, e queremos garantir que sua experiência seja perfeita desde o primeiro momento. Sabemos que chegar a um novo destino pode ser desafiador, mas com a gente você pode relaxar assim que aterrissar em Ushuaia. Somos especializados em oferecer traslados confiáveis e personalizados entre o aeroporto e o seu hotel, garantindo um serviço pontual, confortável e eficiente, para que você só precise se preocupar em aproveitar sua viagem.",

    "Somos uma empresa jovem e cheia de entusiasmo, com uma visão clara: oferecer um atendimento excepcional, baseado na empatia e no compromisso com cada cliente. Acreditamos na importância de ouvir e entender as necessidades de cada viajante, por isso nossa equipe se empenha em proporcionar um serviço de traslado que não apenas leve você de um ponto a outro, mas que transforme cada trajeto em parte da sua experiência nesta terra mágica. Seja você um viajante solo, com um parceiro, família ou um grupo grande, a ONA WAY está pronta para te receber e acompanhar durante toda a sua aventura.",

    "Nossos serviços incluem traslados entre o aeroporto e seu hotel, além de transporte para qualquer lugar dentro e fora da cidade. Não nos limitamos às rotas tradicionais: também te levamos para as excursões mais incríveis de Ushuaia. Desde o deslumbrante Parque Nacional da Terra do Fogo e as margens do Canal Beagle, até o inesquecível Trem do Fim do Mundo, nossa equipe de motoristas locais conhece cada canto da região, garantindo que você chegue no horário, sem complicações, aproveitando tanto o caminho quanto o destino.",

    "Uma das nossas maiores vantagens é a flexibilidade. Oferecemos traslados para grupos pequenos e grandes, adaptando nossos serviços às suas necessidades e preferências. Se você está planejando uma excursão em família, uma viagem com amigos ou um evento corporativo, estamos aqui para garantir que o seu transporte seja confortável e seguro, com veículos modernos e equipados para proporcionar a melhor experiência.",

    "Além disso, na ONA WAY, temos orgulho de oferecer um atendimento próximo e acessível, sempre com um sorriso e a disposição de tornar sua estadia em Ushuaia inesquecível desde o primeiro momento. Com nossa equipe, você não está apenas contratando um traslado, mas ganhando a tranquilidade de saber que está nas mãos de uma empresa que prioriza seu conforto e satisfação.",

    "Deixe que a gente cuide dos seus traslados enquanto você se aventura pelas maravilhas de Ushuaia. Com a ONA WAY, cada quilômetro percorrido se torna parte da sua jornada.",
  ],
  es: [
    "En ONA WAY, comprendemos que cada detalle cuenta cuando se trata de un viaje, y queremos asegurarnos de que tu experiencia sea perfecta desde el primer momento. Sabemos que llegar a un nuevo destino puede ser un desafío, pero con nosotros, puedes relajarte desde el instante en que aterrizas en Ushuaia. Nos especializamos en ofrecer traslados confiables y personalizados entre el aeropuerto y tu hotel, garantizando un servicio puntual, cómodo y eficiente, para que no tengas que preocuparte por nada más que disfrutar.",

    "Somos una empresa joven, llena de entusiasmo, con una clara visión: brindarte una atención excepcional basada en la empatía y el compromiso con cada cliente. Creemos firmemente en la importancia de escuchar y entender las necesidades de cada viajero, por eso nuestro equipo se esfuerza por ofrecer un servicio de traslados que no solo te lleve de un punto a otro, sino que haga que cada trayecto sea parte de tu experiencia en esta tierra mágica. Tanto si vienes solo, con tu pareja, familia o en un grupo grande, ONA WAY está preparado para recibirte y acompañarte en tu viaje.",

    "Nuestros traslados incluyen tanto in-out entre el aeropuerto y tu hotel, como el traslado a cualquier lugar dentro y fuera de la ciudad. No solo cubrimos las rutas tradicionales, sino que también te llevamos a las excursiones más destacadas de Ushuaia. Desde el majestuoso Parque Nacional Tierra del Fuego, pasando por las costas del Canal Beagle, hasta el inolvidable Tren del Fin del Mundo, nuestro equipo de conductores locales conoce cada rincón y se asegura de que llegues a tiempo y sin contratiempos, disfrutando del camino tanto como del destino.",

    "Una de nuestras ventajas es la flexibilidad. Ofrecemos traslados tanto para grupos pequeños como grandes, adaptándonos a tus necesidades y preferencias. Ya sea que estés planeando una excursión en familia, una salida con amigos o un viaje corporativo, nosotros estamos aquí para hacer que tu traslado sea cómodo y seguro, con vehículos modernos y equipados para brindarte la mejor experiencia.",

    "Además, en ONA WAY nos enorgullecemos de ofrecer un servicio cercano y accesible, siempre con una sonrisa y con la disposición de hacer que tu estancia en Ushuaia sea memorable desde el primer momento. Con nuestro equipo, no solo obtendrás un traslado, sino la tranquilidad de saber que cuentas con una empresa que pone tu comodidad y satisfacción en primer lugar.",

    "Déjanos encargarnos de tu traslado mientras te sumerges en las maravillas de Ushuaia. Con ONA WAY, cada kilómetro recorrido es una parte más de tu aventura.",
  ],
};
export default function TrasladoAeropuerto() {
  const { language } = useLanguageStore();
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  const renderContent = (textArray: string[]) => (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {textArray.map((text, index) => (
        <Grid item xs={12} key={index}>
          <Typography>{text}</Typography>
        </Grid>
      ))}
    </Grid>
  );

  const bannerImages = {
    desktop: "/Excursiones/TrasladoAeropuerto/BannerTrasladoAeroupuerto.jpg",
    mobile: "/Excursiones/TrasladoAeropuerto/3.jpg",
  };

  const excursionesImages = [
    "/Excursiones/TrasladoAeropuerto/1.jpg",
    "/Excursiones/TrasladoAeropuerto/2.jpg",
    "/Excursiones/TrasladoAeropuerto/3.jpg",
    "/Excursiones/TrasladoAeropuerto/4.jpg",
  ];

  return (
    <Grid container alignContent="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Image
          src={isDesktop ? bannerImages.desktop : bannerImages.mobile}
          alt="Excursiones CerroCastor"
          width={isDesktop ? 1884 : 368}
          height={isDesktop ? 837 : 270}
          priority
        />
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
        <Grid item xs={12} xl={3} key={index}>
          <Image
            src={src}
            alt={`Excursiones CerroCastor ${index + 1}`}
            width={isDesktop ? 460 : 391}
            height={isDesktop ? 300 : 255}
            priority
          />
        </Grid>
      ))}
    </Grid>
  );
}
