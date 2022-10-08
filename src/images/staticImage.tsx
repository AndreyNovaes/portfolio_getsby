import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function MinhaFoto() {
  return (
    <StaticImage
      src="./foto.jpeg"
      alt="Foto do Andrey com seu cachorro"
      placeholder="blurred"
      layout="constrained"
      width={500}
      height={500}
      quality={100}
    />
  );
}