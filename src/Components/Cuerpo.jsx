import React from 'react';

export default function Cuerpo(props) {

    return (
        <>
        <section id="OurWork" class="clearfix">
            <div class="container">
            <div class="title text-center">
                <h4><span>{props.data.img}</span>{props.data.titulo}</h4>
                <p>
                    {props.data.cuerpo}
                </p>
            </div>
            </div>
        </section>
        </>
    );
}