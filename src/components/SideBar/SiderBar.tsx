"use client";
import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const images = [
  "/ImageSideBar/Baner1.jpg",
  "/ImageSideBar/Baner2.jpg",
  "/ImageSideBar/Baner3.jpg",
  "/ImageSideBar/Baner4.jpg",
  "/ImageSideBar/Baner5.jpg",
  "/ImageSideBar/Baner6.jpg",
  "/ImageSideBar/Baner7.jpg",
  "/ImageSideBar/Baner8.jpg",
  "/ImageSideBar/Baner9.jpg",
  "/ImageSideBar/Baner10.jpg",
];

export default function SiderBar() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, sm: 400, md: 500, xl: 550 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <IconButton
        onClick={goToPrevious}
        aria-label="previous"
        sx={{
          position: "absolute",
          left: 16, // Espaciado adicional para escritorio
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <MdOutlineArrowBackIos />
      </IconButton>
      <Box
        component="img"
        src={images[currentIndex]}
        alt="Imagen del carrusel"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
      <IconButton
        onClick={goToNext}
        aria-label="next"
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <MdArrowForwardIos />
      </IconButton>
    </Box>
  );
}
