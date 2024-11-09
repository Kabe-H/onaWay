"use client";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderDescktop from "./HeaderDescktop/HeaderDescktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const menuExcursiones = [
  { id: 1, nombre: "Tren Fin del Mundo" },
  { id: 2, nombre: "Catamaranes" },
  { id: 3, nombre: "Cerro Castor" },
  { id: 4, nombre: "Laguna Esmeralda" },
  { id: 5, nombre: "Lago Escondido" },
];

const itemMenu = [
  { id: 1, nombre: "Traslado" },
  { id: 2, nombre: "Excursiones" },
  { id: 3, nombre: "Contacto" },
];

export default function Header() {
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  return isDesktop ? (
    <HeaderDescktop menuExcursiones={menuExcursiones} />
  ) : (
    <HeaderMobile itemMenu={itemMenu} menuExcursiones={menuExcursiones} />
  );
}
