import React from 'react';
import Portada from '../Components/Portada';

//Imagenes
import perfil from '../images/perfil.jpg';

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
                            <p class="add-title">DATOS PERSONALES</p>
                            <div class="c-detail">
                                <img className="img" src={perfil} alt=""/>
                                <div class="c-info">
                                <h4>Claudio Andrés Castillo</h4>
                                <p></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>ELECTRICISTA MATRICULADO CATEGORÍA 3</h4>
                                <p></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>GASISTA MATRICULADO</h4>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>TECNICO MATRICULADO EN REFRIGERACIÓN</h4>
                                <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="address-block">
                            <p class="add-title">CONTACTO</p>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>Teléfono móvil</h4>
                                <p><a  href="tel:3513091573">351 309-1573</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>Teléfono fijo</h4>
                                <p><a  href="tel:3514842229">351 484-2229</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>Email</h4>
                                <p><a href="mailto:castilloservicioscordoba@gmail.com">castilloservicioscordoba@gmail.com</a></p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                <h4>PÁGINA DE FACEBOOK</h4>
                                <p><a href="https://www.facebook.com/Castillo-Servicios-274631352920334/" target="_blank" rel="noopener noreferrer">CASTILLO SERVICIOS</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact-outer-wrapper">
                        <div class="address-block">
                            <p class="add-title">FORMACIÓN PROFESIONAL</p>
                            <div class="c-detail">
                                <div class="c-info">
                                    <h4>CURSO DE CAPACITACIÓN EN INSTALACIONES DOMICILIARIAS DE ELECTRICIDAD</h4>
                                    <p>Programa provincial de capacitación para el empleo</p>
                                    <p>COMCAL - Resolución 557/04</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                    <h4>CURSO DE CAPACITACIÓN EN INSTALACIONES DE GAS</h4>
                                    <p>Escuela de capacitación Newton</p>
                                    <p>CONET - Resolución 10.430 bajo ENRG 24/93</p>
                                </div>
                            </div>
                            <div class="c-detail">
                                <div class="c-info">
                                    <h4>CURSO DE CAPACITACIÓN EN INSTALACIONES DE AIRE ACONDICIONADO</h4>
                                    <p>Escuela de instaladores Celsius</p>
                                    <p>Instalador de aire acondicionado hasta 6000 frigorías con refrigerantes R410</p>
                                </div>
                            </div>
                        </div>
                        <div class="address-block">                        
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
}