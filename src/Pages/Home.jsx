import React from 'react';
import {
  Link
} from 'react-router-dom';

//COMPONENTES
import Header from '../Components/shared/Header';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import Cuadros from '../Components/Containers/Cuadros';
import Footer from '../Components/shared/Footer';

//Imagenes
import imagen1 from '../images/image-1.jpg';
import imagen2 from '../images/image-2.jpg';
import imagen3 from '../images/image-3.jpg';
import imagen4 from '../images/image-4.jpg';
import imagen5 from '../images/image-5.jpg';
import imagen6 from '../images/image-6.jpg';
import BtnFlotantes from '../Components/BtnFlotantes';

const data = {
  cuadros: [
  {titulo: "Mely", img: imagen1, cuerpo: "cuerpo de titulo1"},
  {titulo: "Titulo2", img: imagen2, cuerpo: "cuerpo de titulo2"},
  {titulo: "Titulo3", img: imagen3, cuerpo: "cuerpo de titulo3"},
  {titulo: "Titulo4", img: imagen4, cuerpo: "cuerpo de titulo4"},
  {titulo: "Titulo5", img: imagen5, cuerpo: "cuerpo de titulo5"},
  {titulo: "Titulo6", img: imagen6, cuerpo: "cuerpo de titulo6"}
  ]
}

export default function Home() {
        return (
            <>
            <Banner/>
            <Features/>
            <Cuadros cuadros={data.cuadros}/>
            <BtnFlotantes></BtnFlotantes>
            </>
        );
}