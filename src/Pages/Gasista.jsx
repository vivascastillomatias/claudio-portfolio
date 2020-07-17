import React from 'react';

//COMPONENTES
import Portada from '../Components/Portada';
import Cuerpo from '../Components/Cuerpo';
import Cuadros from '../Components/Containers/Cuadros';
import Contacto from '../Components/Contacto';
import BtnFlotantes from '../Components/BtnFlotantes';

//IMAGENES
import imgPortada from '../images/portada.jpg';
import imagen1 from '../images/image-1.png';
import imagen2 from '../images/image-2.png';
import imagen3 from '../images/image-3.png';
import imagen4 from '../images/image-4.png';
import imagen5 from '../images/image-5.png';
import imagen6 from '../images/image-6.png';
var iconGas = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 187.000000 300.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill="#dd8633" stroke="none">
<path d="M915 2872 c-202 -182 -320 -328 -412 -509 -112 -219 -145 -406 -108
-618 31 -178 98 -326 223 -495 87 -117 301 -324 452 -436 74 -56 149 -116 167
-134 30 -31 33 -32 40 -14 4 10 8 51 8 89 -1 116 -30 158 -285 420 -196 201
-254 276 -320 410 -66 135 -84 224 -77 374 5 118 17 171 65 295 l26 69 13 -97
c6 -53 19 -121 28 -152 24 -84 118 -259 192 -359 80 -108 271 -301 403 -406
118 -95 149 -128 195 -204 107 -179 105 -403 -5 -575 -50 -78 -159 -174 -242
-213 -236 -112 -563 -83 -809 72 -167 106 -308 259 -400 434 -22 43 -43 76
-46 73 -9 -8 17 -164 39 -235 56 -181 174 -341 338 -456 405 -284 914 -255
1232 72 163 168 237 364 225 598 -7 125 -23 190 -75 290 -47 91 -193 238 -359
364 -68 51 -150 123 -184 159 -127 138 -220 305 -266 480 -23 86 -26 117 -27
272 -1 192 16 300 73 461 16 44 25 79 22 79 -3 0 -60 -49 -126 -108z"/>
<path d="M233 2127 c-110 -147 -202 -378 -222 -560 -11 -94 1 -241 25 -325
101 -347 349 -592 694 -683 94 -25 267 -44 316 -35 l36 7 -148 86 c-82 47
-185 109 -229 138 -377 250 -535 573 -496 1017 11 124 39 291 60 366 13 43 2
40 -36 -11z"/>
</g>
</svg>

const data = {
    portada:{
        img: iconGas,
        nombre: "GAS Y PLOMERÍA",
        descripcion: "Esto es una descripcion de la seccion de Plomería"
    },
    cuerpo: {
        titulo: "Titulo de cuerpo",
        cuerpo: "Cuerpo del cuerpo"
    },

    cuadros: [
    {titulo: "Titulo1", img: imagen1, cuerpo: "cuerpo de titulo1"},
    {titulo: "Titulo2", img: imagen2, cuerpo: "cuerpo de titulo2"},
    {titulo: "Titulo3", img: imagen3, cuerpo: "cuerpo de titulo3"},
    {titulo: "Titulo4", img: imagen4, cuerpo: "cuerpo de titulo4"},
    {titulo: "Titulo5", img: imagen5, cuerpo: "cuerpo de titulo5"},
    {titulo: "Titulo6", img: imagen6, cuerpo: "cuerpo de titulo6"}
    ]
    }


export default function Gasista() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Portada data={data.portada}/>
            <Cuerpo data={data.cuerpo}/>
            <Cuadros cuadros={data.cuadros}/>
            <Contacto/>
            <BtnFlotantes></BtnFlotantes>
            </>
        );
}