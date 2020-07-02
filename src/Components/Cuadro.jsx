import React from 'react';

export default function Cuadro(props) {

    return (
        <>
        <div class="each-box all scale-anm branding">
            <div class="each-box-img">
                <img src={props.data.img} alt=""/>
            </div>
            <div class="each-box-text-wap">
            <div class="each-box-text">
                <h3>{props.data.titulo}</h3>
                <p>{props.data.cuerpo}</p>
                {/* <a title="Read More" href="#" target="_blank"><i class="fa fa-arrow-right" aria-hidden="true"></i></a> */}
            </div>
            </div>
        </div>
        </>
    );
}