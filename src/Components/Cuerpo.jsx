import React from 'react';

export default function Cuerpo(props) {

    const renderizarItemsServicio = (items) => {
        return items.map((t, idx) => {
            
            return (<div class="c-detail">
                <div class="c-info">
                    <p>{t}</p>
                </div>
            </div>);
        });
    }
    const renderizarItemsReferencias = (items) => {
        return items.map((t, idx) => {
            
            return (<div class="c-detail">
                    <div class="c-info">
                        <h4>{t.nombre}</h4>
                        <p>{t.descripcion}</p>
                    </div>
                </div>);
        });
    }
    return (
        <>
        <section id="CuerpoSeccion">
                <div class="container contact-container">
                    <div class="contact-outer-wrapper">
                        <div class="address-block">
                            <p class="add-title">SERVICIOS</p>
                            {renderizarItemsServicio(props.data.items)}
                        </div>
                        <div class="address-block">
                            <p class="add-title">EXPERIENCIA / REFERENCIAS / OBSERVACIONES</p>
                            {renderizarItemsReferencias(props.data.info_profesional)}
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}