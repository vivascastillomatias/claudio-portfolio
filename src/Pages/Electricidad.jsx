import React from 'react';

//COMPONENTES
import Portada from '../Components/Portada';
import Cuerpo from '../Components/Cuerpo';
import Cuadros from '../Components/Containers/Cuadros';
import Contacto from '../Components/Contacto';
import BtnFlotantes from '../Components/BtnFlotantes';

//IMAGENES
import portada from '../images/electricidad/portada.png';
import imagen1 from '../images/electricidad/image-1.png';
import imagen2 from '../images/electricidad/image-2.png';
import imagen3 from '../images/electricidad/image-3.png';
import imagen4 from '../images/electricidad/image-4.png';
import imagen5 from '../images/electricidad/image-5.png';
import imagen6 from '../images/electricidad/image-6.png';


var iconElectricidad = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="90" height="90" viewBox="0 0 300.000000 388.000000"
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
var iconShield = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#008037" viewBox="0 0 24 24"><path d="M15.762 8.047l-4.381 4.475-2.215-2.123-1.236 1.239 3.451 3.362 5.619-5.715-1.238-1.238zm-3.762-5.503c2.5 1.805 4.555 2.292 7 2.416v9.575c0 3.042-1.686 3.827-7 7.107-5.309-3.278-7-4.065-7-7.107v-9.575c2.447-.124 4.5-.611 7-2.416zm0-2.544c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3z"/></svg>

const data = {
    portada:{
        background: portada,
        img: iconElectricidad,
        nombre: "ELECTRICIDAD",
        descripcion: "Esto es una descripcion de la seccion de electricidad"
    },
    cuerpo: {
        img: iconShield,
        titulo: "Electricista Matriculado Categoría 3",
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


export default function Electricidad() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Portada data={data.portada}/>
            <Cuerpo data={data.cuerpo}/>
            <section id="Laptop">
                <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="laptop-text">
                        <h2>Improve your business<br class="d-none d-lg-none d-xl-block" /> today!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae assumenda explicabo delectus totam ex ratione dolorem, recusandae temporibus illum cupiditate, ab labore architecto. Deserunt officiis, iusto culpa aperiam, obcaecati corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae assumenda explicabo delectus totam ex ratione dolorem, recusandae temporibus illum cupiditate, ab labore architecto.</p>
                        {/* <a href="#">Read More</a> */}
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Cuadros cuadros={data.cuadros}/>
            <Contacto/>
            <BtnFlotantes></BtnFlotantes>
            </>
        );
}