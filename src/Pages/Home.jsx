import React from 'react';

//COMPONENTES
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import Contacto from '../Components/Contacto';
import Cuadros from '../Components/Containers/Cuadros';

//Imagenes
import imagen1 from '../images/image-1.png';
import imagen2 from '../images/image-2.png';
import imagen3 from '../images/image-3.png';
import imagen4 from '../images/image-4.png';
import imagen5 from '../images/image-5.png';
import imagen6 from '../images/image-6.png';
import BtnFlotantes from '../Components/BtnFlotantes';

const data = {
  cuadros: [
  {titulo: "Refacciones en general", img: imagen1, cuerpo: "cuerpo de titulo1"},
  {titulo: "Titulo2", img: imagen2, cuerpo: "cuerpo de titulo2"},
  {titulo: "Titulo3", img: imagen3, cuerpo: "cuerpo de titulo3"},
  {titulo: "Titulo4", img: imagen4, cuerpo: "cuerpo de titulo4"},
  {titulo: "Titulo5", img: imagen5, cuerpo: "cuerpo de titulo5"},
  {titulo: "Titulo6", img: imagen6, cuerpo: "cuerpo de titulo6"}
  ]
}

export default function Home() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Banner/>
            <Features/>
            <Cuadros cuadros={data.cuadros}/>
            <Contacto/>
            <BtnFlotantes></BtnFlotantes>
            </>
        );
}