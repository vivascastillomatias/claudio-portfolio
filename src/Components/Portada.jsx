import React from 'react';

export default function Portada(props) {

    return (
        <>
        <section id="Video">
            <div class="image-wrap">
            <picture>
                <img src={props.data.img} alt="Video Thumbnail"/>
            </picture>
            </div>
            <div class="video-icon">
            <h3>{props.data.nombre}</h3>
            <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br class="d-none d-lg-none d-xl-block" />Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. */}
            {props.data.descripcion}
            </p>
            </div>
        </section>
        </>
    );
}