import { Button, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { FaShoppingCart } from "react-icons/fa";
import { ClassicObjetct } from "@/models/ClassicObjetct";

export default function HeaderDescktop(props: {
  menuExcursiones: ClassicObjetct[];
}) {
  const [anchorElTraslado, setAnchorElTraslado] = useState<null | HTMLElement>(
    null
  );
  const [anchorElExcursiones, setAnchorElExcursiones] =
    useState<null | HTMLElement>(null);

  const openTraslado = Boolean(anchorElTraslado);
  const openExcursiones = Boolean(anchorElExcursiones);

  const { setLanguage } = useLanguageStore();
  const router = useRouter();

  
  const handleClickTraslado = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTraslado(event.currentTarget);
  };

  const handleClickExcursiones = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElExcursiones(event.currentTarget);
  };

  return (
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
              onClose={() => setAnchorElTraslado(null)}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#9c4645",
                  color: "#ffffff",
                },
              }}
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
              sx={{
                height: "40px",
              }}
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
              onClose={() => setAnchorElExcursiones(null)}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#9c4645",
                  color: "#ffffff",
                },
              }}
            >
              {props.menuExcursiones.map((dato: ClassicObjetct) => (
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
            <IconButton
              onClick={() => {
                console.log("ASdasd");
                setLanguage("es");
              }}
            >
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
  );
}
