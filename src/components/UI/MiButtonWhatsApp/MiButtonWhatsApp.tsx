"use client"
import { IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function MiButtonWhatsApp() {
  return (
    <IconButton
      style={{ position: "fixed", top: "80%", right: "2%" }}
      onClick={() => window.open("https://wa.me/5492901650309?text=Hola")}
    >
      <Image
        src="/LogoRedes/LogoWhatsApp.png"
        alt="Whatsapp Logo"
        width={100}
        height={100}
        priority
      />
    </IconButton>
  );
}
