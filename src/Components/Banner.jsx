import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

export default function Banner() {
    const options = {
        items: 1,
        rewind: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 7000
    };
    return (
        <>
        <section id="HeroBanner">
                <OwlCarousel options={options} >
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                    <h1><strong class="banner-tittle">COVID-19 - TRABAJAMOS CUIDANDOTE</strong></h1>
                                    <p> Debido a la situacion actual frente al COVID-19 Trabajamos con responsabilidad tomando <br/>
                                     todos los recaudos necesarios para brindar un perfecto servicio para tu hogar</p>
                                    <div class="bannet-cta">
                                    {/* <div class="cta-1">
                                        <a>
                                        Click! 
                                        </a>
                                    </div>
                                    <div class="cta-2">
                                        <a>Click!</a>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                    <h1><strong class="banner-tittle">La solución que buscas en un solo lugar.</strong></h1>
                                    <p> 15 años de experiencia
                                    <br /> brindando servicios para tu hogar.</p>
                                    <div class="bannet-cta">
                                    {/* <div class="cta-1">
                                        <a>
                                        Click! 
                                        </a>
                                    </div>
                                    <div class="cta-2">
                                        <a>Click!</a>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                <h1><strong class="banner-tittle"> Presupuesto sin cargo</strong></h1>
                                <h1><strong class="banner-tittle"> Habilitación ERSEP</strong></h1>
                                <h1><strong class="banner-tittle"> Refacciones en general</strong></h1>
                                    {/* <p> Comunicate y te asesoramos.</p>
                                    <div class="bannet-cta">
                                    <div class="cta-1">
                                        <a href="tel:+3516811625">Solicitar presupuesto</a>
                                    </div>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                <h1><strong class="banner-tittle"> Urgencias domiciliarias </strong></h1>
                                <h1><strong class="banner-tittle"> Reparaciones en el día</strong></h1>
                                <h1><strong class="banner-tittle"> Habilitación ECOGAS</strong></h1>
                                    {/* <p> Comunicate y te asesoramos.</p>
                                    <div class="bannet-cta">
                                    <div class="cta-1">
                                        <a href="tel:+3516811625">Solicitar presupuesto</a>
                                    </div>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                </OwlCarousel>
        </section>
        </>
    );
}