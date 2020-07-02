import React from 'react';
import Cuadro from '../Cuadro';

export default function Cuadros(props) {
    
    const renderizarCuadros = (cuadros) => {
        return cuadros.map((t, idx) => <Cuadro key={idx} data={t}></Cuadro>);
    }

    return (
        <>
        <section id="OurWork" className="clearfix">
            <div className="filter-box clearfix">
                {renderizarCuadros(props.cuadros)}
            </div>
        </section>
        </>
    );
}