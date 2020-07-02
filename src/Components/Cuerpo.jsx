import React from 'react';

export default function Cuerpo(props) {

    return (
        <>
        <section id="OurWork" class="clearfix">
            <div class="container">
            <div class="title text-center">
                <h3>{props.data.titulo}</h3>
                <p>
                    {props.data.cuerpo}
                </p>
            </div>
            </div>
        </section>
        </>
    );
}