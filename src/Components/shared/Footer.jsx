import React from 'react';

var logoGAlgoritmos = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="24px" height="24px" viewBox="0 0 300.000000 301.000000">
<g transform="translate(0.000000,301.000000) scale(0.100000,-0.100000)"
fill="#23a6bf" stroke="none">
<path d="M1330 2999 c-341 -33 -634 -168 -881 -406 -263 -255 -412 -579 -438
-956 -50 -709 357 -1351 984 -1555 248 -81 550 -98 802 -46 605 125 1079 620
1179 1234 21 127 21 348 -1 475 -51 301 -221 628 -441 849 -228 229 -554 374
-916 406 -126 11 -165 11 -288 -1z m435 -191 c498 -98 908 -519 1022 -1048 25
-118 25 -401 0 -517 -114 -531 -529 -938 -1053 -1036 -385 -72 -769 26 -1069
275 -234 193 -393 460 -462 770 -14 66 -18 124 -17 283 1 182 3 209 26 296 89
331 275 592 553 774 307 201 653 272 1000 203z"/>
<path d="M1550 2369 c-189 -14 -349 -57 -495 -132 -197 -102 -351 -327 -412
-602 -23 -104 -20 -291 5 -386 111 -415 503 -602 1147 -549 262 22 356 40 397
77 16 14 18 34 18 142 0 69 7 218 15 331 8 113 15 246 15 296 l0 91 -312 5
c-172 3 -315 4 -317 2 -2 -2 -6 -55 -9 -118 l-5 -115 143 -3 142 -3 -1 -135
c-1 -74 -4 -167 -7 -207 l-7 -71 -51 -16 c-143 -44 -308 -52 -426 -22 -326 83
-469 343 -380 690 58 229 222 393 449 451 171 44 291 39 564 -20 87 -19 161
-35 164 -35 3 0 3 59 1 131 -4 93 -10 134 -19 140 -36 22 -435 75 -504 67 -5
0 -57 -4 -115 -9z"/>
</g>
</svg>

export default function Footer() {
    let date = new Date();
    let fecha = date.getFullYear();
    return (
        <>
        <footer id="Footer">
            <div class="container text-center">
            <div class="footer-text ">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div class="copy-right">
                        <a href="mailto:g.algoritmos@gmail.com">{logoGAlgoritmos}</a>
                        <p>Desarrollado por G-Algoritmos </p>
                        </div>
                        <p class="designed">© Todos los derechos reservados {fecha}</p>
                        <a href="mailto:g.algoritmos@gmail.com"><p class="contact-mail">g.algoritmos@gmail.com</p></a>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        </>
    );
}