import React from 'react';

export default function Portada(props) {

    return (
        <>
        <section id="Portada">
            <div id="BannerFijo">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                    {props.data.img}
                                    <h1><strong>{props.data.nombre}</strong></h1>
                                    {/* <p> {props.data.descripcion.repeat(3)}</p> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
        </section>
        </>
    );
}