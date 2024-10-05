"use client";
import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

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
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(
    null
  );
  const [anchorElTraslado, setAnchorElTraslado] = useState<null | HTMLElement>(
    null
  );
  const [anchorElExcursiones, setAnchorElExcursiones] =
    useState<null | HTMLElement>(null);

  const router = useRouter();

  const openMobile = Boolean(anchorElMobile);
  const openTraslado = Boolean(anchorElTraslado);
  const openExcursiones = Boolean(anchorElExcursiones);
  const { setLanguage } = useLanguageStore();

  const handleClickMobile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMobile(event.currentTarget);
  };

  const handleCloseMenuMobile = () => {
    setAnchorElMobile(null);
  };

  const handleCloseTraslado = () => {
    setAnchorElTraslado(null);
  };

  const handleCloseExcursiones = () => {
    setAnchorElExcursiones(null);
  };

  const handleClickTraslado = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTraslado(event.currentTarget);
  };

  const handleClickExcursiones = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElExcursiones(event.currentTarget);
  };

  return isDesktop ? (
    <Grid container spacing={1} component="header">
      <Grid item md={2} xl={3} component="section">
        <Link href={"/"}>
          <Image
            src="/Icons/LogoOnaway.png"
            alt="Logo Titulo"
            width={260}
            height={45}
          />
        </Link>
      </Grid>
      <Grid item md={3} xl={2} />
      <Grid item md={3} xl={3}>
        <Grid container>
          <Grid item xl={3}>
            <Button
              sx={{ height: "40px" }}
              onClick={handleClickTraslado}
              aria-controls={openTraslado ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openTraslado ? "true" : undefined}
            >
              Traslados
            </Button>
            <Menu
              anchorEl={anchorElTraslado}
              open={openTraslado}
              onClose={handleCloseTraslado}
            >
              <MenuItem
                onClick={() => {
                  router.push("/Excursiones/6");
                  setAnchorElTraslado(null);
                }}
              >
                Hotel - Aeropuerto
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xl={3}>
            <Button
              sx={{ height: "40px" }}
              onClick={handleClickExcursiones}
              aria-controls={openExcursiones ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openExcursiones ? "true" : undefined}
            >
              Excursiones
            </Button>
            <Menu
              anchorEl={anchorElExcursiones}
              open={openExcursiones}
              onClose={handleCloseExcursiones}
            >
              {menuExcursiones.map((dato) => (
                <MenuItem
                  onClick={() => {
                    setAnchorElExcursiones(null);
                    router.push(`/Excursiones/${dato.id}`);
                  }}
                  key={dato.id}
                >
                  {dato.nombre}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid item xl={3}>
            <Button sx={{ height: "40px" }}>Contacto</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} xl={2.5} />
      <Grid item md={1} xl={0.5} component="section">
        <IconButton>
          <FaShoppingCart style={{ fontSize: "30px", color: "#9c3639" }} />
        </IconButton>
      </Grid>
      <Grid item md={1} xl={1} component="section">
        <Grid container>
          <Grid item xs={4}>
            <IconButton onClick={() => setLanguage("es")}>
              <Image
                src="/Icons/IconoEspaniol.png"
                alt="IconoEspaniol"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => setLanguage("en")}>
              <Image
                src="/Icons/IconoIngles.png"
                alt="IconoIngles"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => setLanguage("pr")}>
              <Image
                src="/Icons/IconoPortugues.png"
                alt="IconoPortugues"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={0.5} component="header">
      <Grid item xs={4} component="section" sx={{ mt: 1 }}>
        <Image
          src="/Icons/LogoOnaway.png"
          alt="Logo Titulo"
          width={100}
          height={19}
        />
      </Grid>
      <Grid item xs={2} component="section">
        <IconButton sx={{ p: 1 }}>
          <FaShoppingCart style={{ fontSize: "25px", color: "#9c3639" }} />
        </IconButton>
      </Grid>
      <Grid item xs={3} component="section">
        <Grid container>
          <Grid item xs={4}>
            <IconButton sx={{ p: 0.5 }} onClick={() => setLanguage("es")}>
              <Image
                src="/Icons/IconoEspaniol.png"
                alt="IconoEspaniol"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton sx={{ p: 0.5 }} onClick={() => setLanguage("en")}>
              <Image
                src="/Icons/IconoIngles.png"
                alt="IconoIngles"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton sx={{ p: 0.5 }} onClick={() => setLanguage("pr")}>
              <Image
                src="/Icons/IconoPortugues.png"
                alt="IconoPortugues"
                width={20}
                height={30}
                priority
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} md={0.5} xl={1} component="section">
        <Button
          sx={{
            backgroundColor: "#9c3639",
            fontFamily: "coolvetica rg",
            height: "30px",
            mt: 1,
          }}
          variant="contained"
          onClick={handleClickMobile}
        >
          MENU
        </Button>
        <Menu
          anchorEl={anchorElMobile}
          open={openMobile}
          onClose={handleCloseMenuMobile}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {itemMenu?.map((dato) => (
            <MenuItem key={dato.id} onClick={handleCloseMenuMobile}>
              {dato.nombre}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
}
