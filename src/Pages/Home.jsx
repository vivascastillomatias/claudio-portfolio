import React from 'react';

//COMPONENTES
import Banner from '../Components/Banner';
import Features from '../Components/Containers/Features';
import Cuadros from '../Components/Containers/Cuadros';

//Imagenes
import imagen1 from '../images/image-1.png';
import imagen2 from '../images/image-2.png';
import imagen3 from '../images/image-3.png';
import imagen4 from '../images/image-4.png';
import imagen5 from '../images/image-5.png';
import imagen6 from '../images/image-6.png';


var iconGas = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 187.000000 300.000000" preserveAspectRatio="xMidYMid meet">
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
var iconElectricidad = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="120" height="120" viewBox="0 0 300.000000 388.000000"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,388.000000) scale(0.100000,-0.100000)"
fill="#dd8633" stroke="none">
<path d="M2554 3728 c-70 -73 -444 -457 -830 -853 -386 -396 -714 -735 -729
-752 l-27 -33 164 -1 c89 -1 207 -4 262 -8 l98 -6 -142 -175 c-131 -162 -250
-308 -445 -550 l-77 -95 196 -3 c108 -1 196 -6 196 -10 0 -16 -173 -284 -603
-938 -93 -141 -171 -263 -175 -272 -3 -9 21 12 54 48 32 36 244 254 470 485
225 231 557 571 736 755 l326 335 -194 3 c-107 1 -194 6 -194 10 0 9 141 183
376 463 174 207 284 348 284 361 0 5 -117 8 -260 8 -175 0 -260 3 -260 10 0
13 33 64 164 255 53 77 171 250 261 385 91 135 195 288 232 340 36 52 97 141
134 197 38 56 73 104 78 107 9 6 43 66 37 66 -2 0 -61 -60 -132 -132z"/>
<path d="M1350 3473 c-427 -46 -840 -295 -1076 -649 -177 -266 -267 -560 -268
-874 0 -157 12 -252 50 -399 49 -190 103 -307 225 -487 91 -135 277 -331 295
-312 16 18 134 207 134 216 0 4 -35 43 -78 87 -85 87 -190 235 -229 324 -14
31 -34 74 -44 96 -53 114 -95 377 -85 534 17 261 87 466 229 666 127 179 303
329 493 421 144 69 414 120 574 107 l76 -6 60 50 c85 71 146 142 142 167 -2
16 -15 24 -51 33 -111 27 -320 40 -447 26z"/>
<path d="M2426 2976 c-37 -52 -69 -102 -72 -111 -4 -10 11 -36 43 -73 91 -104
145 -186 204 -307 88 -182 122 -334 122 -545 0 -335 -131 -656 -364 -890 -222
-223 -475 -339 -801 -365 l-86 -7 -119 -121 -118 -120 35 -9 c65 -15 302 -21
400 -9 322 39 620 183 858 415 120 117 210 243 300 421 109 218 151 378 159
611 13 381 -79 693 -293 991 -61 86 -176 213 -192 213 -6 0 -40 -42 -76 -94z"/>
</g>
</svg>
var iconRefacciones = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="100" height="100" viewBox="0 0 284.000000 252.000000"
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
var iconRefrigeracion = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="100" height="100" viewBox="0 0 300.000000 304.000000"
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

const features = [
                {
                    titulo: "Electricidad",
                    icon: iconElectricidad,
                    link: '/electricidad',
                    cuerpo: [
                        'Técnico matriculado categoría 3',
                        'Certificación apto ERSEP',
                        'Cableados e iluminaciones',
                        'Habilitación EPEC',
                        'Mantenimiento',
                        'Colocación de estabilizadores de tensión',
                        'Puesta a tierra'
                    ]
                },
                {
                    titulo: "Gas y Plomería",
                    icon: iconGas,
                    link: '/gas',
                    cuerpo: [
                        'Instalación de red domiciliaria',
                        'Mantenimiento y reparaciones',
                        'Instalación de artefactos',
                        'Habilitación ECOGAS',
                        'Planos aprobados',
                        'Trámites y formularios',
                        'Pérdida de medidor',
                        'Sistema tradicional y termofusión'
                    ]
                },
                {
                    titulo: "Refrigeración",
                    icon: iconRefrigeracion,
                    link: '/refrigeracion',
                    cuerpo: [
                        'Técnico matriculado',
                        'Mantenimiento preventivo',
                        'Colocación completa con linea de electricidad',
                        'Todas las marcas y modelos',
                        'Carga de refrigerante',
                        'Desinstalación e Instalación por mudanza',
                        'Balance térmico',
                        'Reparación de lavarropas'
                    ]
                },
                {
                    titulo: "Refacciones",
                    icon: iconRefacciones,
                    link: '/refacciones',
                    cuerpo: [
                    'Pintura en general',
                    'Refacciones por colocacion de aires acondicionados',
                    'Impermeabilizaciones en techos',
                    'Refacciones en general',
                    'Herrería'
                    ]
                }
            ];

const data = {
    cuadros: [
        {titulo: "Carga de refrigerante", img: imagen4, link: "/refrigeracion"},
        {titulo: "Cableados e iluminaciones", img: imagen2, link: "/electricidad"},
        {titulo: "Desinstalación e instalación de aires acondicionados", img: imagen6, link: "/refrigeracion"},
        {titulo: "Refacciones en general", img: imagen1, link: "/refacciones"},
        {titulo: "Instalación de red de gas", img: imagen5, link: "/gas"},
        {titulo: "Instalación eléctrica domiciliaria", img: imagen3, link: "/electricidad"},
    ]
    }

export default function Home() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Banner/>
            <Features features={features}/>
            <Cuadros cuadros={data.cuadros}/>
            </>
        );
}