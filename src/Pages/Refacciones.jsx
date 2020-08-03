import React from 'react';

//COMPONENTES
import Portada from '../Components/Portada';
import Cuerpo from '../Components/Cuerpo';

var iconRefacciones = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="90" height="90" viewBox="0 0 284.000000 252.000000"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,252.000000) scale(0.100000,-0.100000)"
fill="#dd8633" stroke="none">
<path d="M1435 2500 c-194 -21 -433 -115 -586 -230 -92 -69 -357 -340 -381
-389 -21 -43 -21 -46 -5 -92 22 -61 21 -71 -6 -97 -24 -23 -61 -29 -72 -12 -3
6 -33 10 -67 10 l-60 0 -121 -119 -121 -118 -4 -60 c-4 -59 -4 -60 46 -119 67
-80 322 -328 364 -354 37 -22 73 -25 114 -10 33 13 220 193 240 232 24 45 17
105 -17 166 -26 46 -29 59 -20 78 6 13 21 26 35 30 22 5 35 0 110 -43 26 -16
69 -16 120 -2 24 7 41 7 45 1 6 -10 505 -548 756 -817 83 -88 219 -235 304
-328 167 -180 217 -217 296 -217 73 0 132 40 272 184 144 147 159 173 150 264
-9 87 23 53 -567 603 -151 140 -393 365 -538 499 -247 227 -263 245 -255 269
16 55 9 116 -20 159 -34 52 -31 61 62 140 100 86 151 120 286 187 118 60 120
61 120 95 0 27 -6 37 -30 51 -68 40 -274 58 -450 39z"/>
</g>
</svg>

const data = {
    portada:{
        img: iconRefacciones,
        nombre: "REFACCIONES",
        descripcion: "Esto es una descripcion de la seccion de Refacciones"
    },
    cuerpo: {
        items: [
            'Pintura en general',
            'Impermeabilizaciones en techos',
            'Refacciones en general',
            'Refacción por instalación de split',
            'Herrería'
        ],
        info_profesional:[
            {nombre: '', descripcion: ''}
        ]
    }
    }


export default function Refacciones() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Portada data={data.portada}/>
            <Cuerpo data={data.cuerpo}/>
            </>
        );
}