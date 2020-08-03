import React from 'react';

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