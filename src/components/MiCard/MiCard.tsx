"use client";
import { IMiCard } from "@/models/MiCardModel";
import { Box, Button, Divider, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MiCard(props: { element: IMiCard[] }) {
  const router = useRouter();
  const isDesktopQuery = useMediaQuery("(min-width:1024px)");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery]);

  return isDesktop ? (
    <Box
      className="prueba"
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {props.element?.map((dato) => (
        <Grid
          item
          xs={12}
          md={5.7}
          xl={5.8}
          sx={{
            width: "100%",
            position: "relative",
            "&:hover": {
              zIndex: 2,
              transform: "scale(1.05)",
            },
            transition: "transform 0.3s ease, z-index 0.3s ease",
            m: 1.5,
          }}
          key={dato.id}
        >
          <Button onClick={()=>router.push(`/Excursiones/${dato.id}`)}>
            <Box
              component="img"
              src={dato.image}
              alt={dato.image}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Button>
        </Grid>
      ))}
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: { xs: "none", md:"block", xl: "block" },
        }}
      >        
        <Image
          width={400}
          height={550}
          src="/Icons/Logo.png"
          alt="Imagen central"
        />
      </Box>
    </Box>
  ) : (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {props.element?.map((dato, index) => (
        <Grid item xs={12} key={dato.id}>
          <Button onClick={()=>router.push(`/Excursiones/${dato.id}`)}>
          <Box
            component="img"
            src={dato.image}
            alt={dato.image}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          </Button>
          {index < props.element.length - 1 && (
            <Divider
              sx={{
                mt: 2,
                mb: 2,
                width: "100%",
                backgroundColor: "black",
              }}
            />
          )}
        </Grid>
      ))}
    </Box>
  );
}
