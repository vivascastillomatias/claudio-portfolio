import React from 'react';

//COMPONENTES
import Portada from '../Components/Portada';
import Cuerpo from '../Components/Cuerpo';
import Cuadros from '../Components/Containers/Cuadros';

//IMAGENES
import imagen1 from '../images/image-1.png';
import imagen2 from '../images/image-2.png';
import imagen3 from '../images/image-3.png';
import imagen4 from '../images/image-4.png';
import imagen5 from '../images/image-5.png';
import imagen6 from '../images/image-6.png';
var iconRefrigeracion = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="90" height="90" viewBox="0 0 300.000000 304.000000"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,304.000000) scale(0.100000,-0.100000)"
fill="#dd8633" stroke="none">
<path d="M1285 3023 c-135 -17 -339 -79 -450 -136 -227 -116 -439 -304 -573
-510 -239 -366 -316 -817 -212 -1233 81 -323 267 -618 512 -814 142 -113 237
-169 391 -230 118 -46 289 -90 351 -90 l26 0 0 124 0 125 -47 7 c-252 37 -587
241 -756 459 -198 256 -292 572 -266 896 31 382 212 704 521 922 128 91 355
185 511 212 l37 6 0 134 c0 74 -3 134 -7 134 -5 -1 -21 -4 -38 -6z"/>
<path d="M1670 2900 l0 -130 28 -5 c288 -60 513 -176 697 -360 107 -106 171
-200 236 -345 114 -255 145 -535 88 -796 -41 -189 -89 -302 -207 -484 -99
-151 -374 -367 -567 -443 -95 -38 -201 -67 -248 -67 l-28 0 3 -127 3 -128 45
4 c112 8 387 98 500 163 113 66 269 188 350 274 311 330 470 793 421 1224 -39
336 -147 588 -372 865 -125 155 -360 320 -564 398 -114 44 -285 87 -341 87
l-44 0 0 -130z"/>
<path d="M1231 2424 c-45 -47 -81 -88 -81 -92 0 -4 52 -60 115 -126 l115 -118
0 -179 c0 -98 -3 -179 -7 -178 -5 0 -27 13 -50 27 -23 15 -88 55 -144 89
l-103 62 -42 161 c-23 89 -44 163 -46 166 -6 5 -220 -56 -231 -66 -4 -4 6 -61
22 -128 17 -66 31 -127 31 -135 0 -9 -39 -24 -117 -46 -65 -18 -123 -34 -130
-36 -12 -4 -11 -9 26 -155 13 -47 26 -88 30 -92 4 -5 61 7 126 26 231 65 216
63 266 29 24 -16 86 -54 136 -84 51 -30 93 -57 93 -60 0 -3 -70 -47 -155 -99
l-156 -93 -142 42 c-78 22 -149 41 -157 41 -11 0 -24 -33 -47 -120 -35 -134
-36 -130 37 -145 79 -16 190 -58 190 -71 0 -8 -14 -69 -31 -135 -25 -96 -29
-123 -18 -129 27 -18 220 -63 228 -54 4 5 27 83 50 174 22 90 47 170 54 178 8
7 74 49 148 93 l134 79 3 -171 2 -170 -115 -122 c-63 -67 -115 -127 -115 -132
0 -6 40 -51 90 -100 l90 -89 93 98 93 99 89 -97 c50 -53 95 -95 101 -94 6 2
50 44 98 95 l88 92 -126 130 -126 129 0 160 c0 89 3 163 8 165 4 2 67 -32 141
-77 l134 -81 24 -90 c12 -49 32 -130 44 -178 17 -72 24 -87 37 -83 10 3 60 17
112 31 52 15 102 30 111 34 15 5 14 19 -16 136 -18 72 -32 131 -31 132 4 5
186 56 214 60 21 4 32 11 32 22 0 20 -56 241 -63 247 -3 3 -65 -11 -138 -32
-194 -53 -178 -53 -267 1 -42 27 -103 63 -134 82 -32 19 -58 38 -58 43 0 15
235 150 260 150 14 0 94 -20 179 -45 85 -25 156 -44 157 -42 5 5 65 259 62
262 -2 1 -46 14 -98 29 -159 44 -157 41 -120 158 11 34 22 83 26 108 l6 45
-122 33 c-67 19 -123 32 -125 30 -2 -2 -20 -68 -40 -148 -21 -80 -41 -153 -47
-163 -5 -9 -44 -38 -86 -63 -42 -25 -102 -61 -132 -79 -30 -19 -58 -34 -62
-35 -5 0 -8 77 -8 171 l0 172 84 86 c107 109 156 163 156 171 0 4 -38 47 -85
96 l-85 89 -95 -97 c-54 -56 -100 -95 -108 -92 -7 2 -50 45 -96 94 -45 50 -86
90 -91 90 -4 0 -44 -39 -89 -86z"/>
</g>
</svg>

const data = {
    portada:{
        img: iconRefrigeracion,
        nombre: "REFRIGERACIÓN",
        descripcion: "Esto es una descripcion de la seccion de refrigeración"
    },
    cuerpo: {
        items: [
            'Mantenimiento preventivo',
            'Asesoría',
            'Diagnóstico y reparación',
            'Carga de refrigerante',
            'Desinstalación e Instalación por mudanza',
            'Balance térmico',
            'Reparación de lavarropas'
        ],
        info_profesional:[
            {nombre: 'TECNICO MATRICULADO EN REFRIGERACIÓN', descripcion: 'Escuela de instaladores Isaias Goldman'}
        ]
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


export default function Refrigeracion() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Portada data={data.portada}/>
            <Cuerpo data={data.cuerpo}/>
            <Cuadros cuadros={data.cuadros}/>
            </>
        );
}