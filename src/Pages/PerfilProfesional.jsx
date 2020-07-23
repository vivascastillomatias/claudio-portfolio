import React from 'react';
import Portada from '../Components/Portada';

var iconContact = <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="#dd8633"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>

const portada = {
        nombre: "PERFIL PROFESIONAL",
        img: iconContact,
    }

export default function PerfilProfesional() {
    window.scrollTo(0, -10000);
        return (
            <>
            <Portada data={portada}/>
            <section id="ContactUs">
                <div class="container contact-container">
                <h3 class="contact-title">
                Me gustan los desafíos e intento poner lo mejor de mi en cada
                objetivo que me propongo. Soy una persona con muchas ganas de
                crecer profesionalmente y desarrollarme en lo que comenzó siendo
                un hobbie. Soy responsable, tengo facilidad para adaptarme a
                equipos de trabajo y aprender nuevas tecnologías.
                </h3>
                    <div class="contact-outer-wrapper">
                        <div class="address-block">
                            <p class="add-title">CONTACTO</p>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Teléfono móvil</h4>
                                <p><a href="tell:+1234567890">+1234567890</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-phone-square" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Teléfono fijo</h4>
                                <p><a href="tell:+1234567890">+1234567890</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-envelope" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Email</h4>
                                <p><a href="mailto:castilloservicios@gmail.com">castilloservicios@gmail.com</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-envelope" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>PÁGINA DE FACEBOOK</h4>
                                <p><a href="#">[pagina de facebook]</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="address-block">
                            <p class="add-title">DATOS PERSONALES</p>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Claudio Andrés Castillo</h4>
                                <p>#001 bridge Road, RST City, USA</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-phone-square" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>MONOTRIBUTISTA</h4>
                                <p>CUIT: 12-12345678-90</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact-outer-wrapper">
                        <div class="address-block">
                            <p class="add-title">EXPERIENCIA / REFERENCIAS</p>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                    <h4>POSTRES SERRANO</h4>
                                    <p><strong>Actividad:</strong> dd/mm/aaaa</p>
                                    <p><strong>Desde:</strong> dd/mm/aaaa</p>
                                    <p><strong>Hasta:</strong> dd/mm/aaaa</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                    <h4>POSTRES SERRANO</h4>
                                    <p><strong>Actividad:</strong> dd/mm/aaaa</p>
                                    <p><strong>Desde:</strong> dd/mm/aaaa</p>
                                    <p><strong>Hasta:</strong> dd/mm/aaaa</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                    <h4>POSTRES SERRANO</h4>
                                    <p><strong>Actividad:</strong> dd/mm/aaaa</p>
                                    <p><strong>Desde:</strong> dd/mm/aaaa</p>
                                    <p><strong>Hasta:</strong> dd/mm/aaaa</p>
                                </div>
                            </div>
                        </div>
                        <div class="address-block">
                            <p class="add-title">FORMACIÓN PROFESIONAL</p>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-address-book" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Address</h4>
                                <p>#001 bridge Road, RST City, USA</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-phone-square" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Mobile</h4>
                                <p><a href="tell:+1234567890">+1234567890</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                {/* <div class="c-icon"><i class="fas fa-envelope" aria-hidden="true"></i></div> */}
                                <div class="c-info">
                                <h4>Email</h4>
                                <p><a href="mailto:abc@abc.com">abc@abc.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
}