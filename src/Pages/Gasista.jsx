import React from 'react';
import {
  Link
} from 'react-router-dom';

//COMPONENTES
import Header from '../Components/shared/Header';
import Footer from '../Components/shared/Footer';
import Portada from '../Components/Portada';
import Cuerpo from '../Components/Cuerpo';
import Cuadros from '../Components/Containers/Cuadros';

//IMAGENES
import imgPortada from '../images/portada.jpg';
import imagen1 from '../images/image-1.jpg';
import imagen2 from '../images/image-2.jpg';
import imagen3 from '../images/image-3.jpg';
import imagen4 from '../images/image-4.jpg';
import imagen5 from '../images/image-5.jpg';
import imagen6 from '../images/image-6.jpg';

const data = {
    portada:{
        img: imgPortada,
        nombre: "Plomería y gasista",
        descripcion: "Esto es una descripcion de la seccion de Plomería"
    },
    cuerpo: {
        titulo: "Titulo de cuerpo",
        cuerpo: "Cuerpo del cuerpo"
    },

    cuadros: [
    {titulo: "Te amo mi gorriño", img: imagen1, cuerpo: "cuerpo de titulo1"},
    {titulo: "Titulo2", img: imagen2, cuerpo: "cuerpo de titulo2"},
    {titulo: "Titulo3", img: imagen3, cuerpo: "cuerpo de titulo3"},
    {titulo: "Titulo4", img: imagen4, cuerpo: "cuerpo de titulo4"},
    {titulo: "Titulo5", img: imagen5, cuerpo: "cuerpo de titulo5"},
    {titulo: "Titulo6", img: imagen6, cuerpo: "cuerpo de titulo6"}
    ]
    }


export default function Gasista() {
    
        return (
            <>
            <Portada data={data.portada}/>
            <Cuerpo data={data.cuerpo}/>
            <Cuadros cuadros={data.cuadros}/>
            </>
        );
}