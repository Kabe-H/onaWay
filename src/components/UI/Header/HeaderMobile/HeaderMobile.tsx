import { Button, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/hooks/useLanguageStore/useLanguageStore";
import { FaShoppingCart } from "react-icons/fa";
import { ClassicObjetct } from "@/models/ClassicObjetct";

export default function HeaderMobile(props: {
  itemMenu: ClassicObjetct[];
  menuExcursiones: ClassicObjetct[];
}) {
  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(
    null
  );
  const [anchorElSubMenuMobile, setAnchorElSubMenuMobile] =
    useState<null | HTMLElement>(null);

  const { setLanguage } = useLanguageStore();

  const openMobile = Boolean(anchorElMobile);
  const openSubMenuMobile = Boolean(anchorElSubMenuMobile);

  const router = useRouter();

  const handleClickMobile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMobile(event.currentTarget);
  };

  const handleClickMenuExcursiones = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSubMenuMobile(event.currentTarget);
  };

  const actionMenu = (dato: any, event: React.MouseEvent<HTMLElement>) => {
    if (dato.nombre === "Excursiones") {
      handleClickMenuExcursiones(event);
    } else if (dato.nombre === "Traslado") {
      router.push(`/Excursiones/6`);
    } else {
      window.open("https://wa.me/5492901650309?text=Hola");
    }
    setAnchorElMobile(null);
  };

  return (
    <Grid container spacing={0.5} component="header">
      <Grid item xs={4} component="section" sx={{ mt: 1 }}>
        <Link href={"/"}>
          <Image
            src="/Icons/LogoOnaway.png"
            alt="Logo Titulo"
            width={100}
            height={19}
          />
        </Link>
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
          onClose={() => setAnchorElMobile(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#9c4645",
              color: "#ffffff",
            },
          }}
        >
          {props.itemMenu?.map((dato) => (
            <MenuItem
              key={dato.id}
              onClick={(event) => actionMenu(dato, event)}
            >
              {dato.nombre}
            </MenuItem>
          ))}
        </Menu>
        <Menu
          anchorEl={anchorElSubMenuMobile}
          open={openSubMenuMobile}
          onClose={() => setAnchorElSubMenuMobile(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#9c4645",
              color: "#ffffff",
            },
          }}
        >
          {props.menuExcursiones?.map((dato) => (
            <MenuItem
              key={dato.id}
              onClick={() => {
                setAnchorElSubMenuMobile(null);
                setAnchorElMobile(null);
                router.push(`/Excursiones/${dato.id}`);
              }}
            >
              {dato.nombre}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
}
