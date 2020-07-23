import React from 'react';
import Feature from '../Feature';


export default function Features(props) {

    const renderizarFeatures = (features) => {
        return features.map((t, idx) => <Feature key={idx} data={t}></Feature>);
    }
    return (
        <>
        <section id="Gain">
            <div class="container">
                <div class="row">
                   {renderizarFeatures(props.features)}
                </div>
            </div>
        </section>
        </>
    );
}





/*********************************************************************** */
// export default function Features() {

//     return (
//         <>
//         <section id="Gain">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
//                         <Link to="/electricidad">
//                             <div class="each-icon">
//                                 <div class="icon-wrap">
//                                     {iconElectricidad}
//                                 </div>
//                                 <div class="icon-text">
//                                     <h3>{data.cuadros[0].titulo}</h3>
//                                     <p>
//                                         <div class="container">
//                                         <ul>
//                                             <li>Técnico matriculado categoría 3</li>
//                                             <li>Certificación apto ERSEP</li>
//                                             <li>Cableados e iluminaciones</li>
//                                             <li>Habilitación EPEC</li>
//                                             <li>Mantenimiento</li>
//                                             <li>Urgencias</li>
//                                             <li>Puesta a tierra</li>
//                                         </ul>
//                                         </div>
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                     <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
//                         <Link to="/gas">
//                             <div class="each-icon">
//                                 <div class="icon-wrap">
//                                     {iconGas}
//                                 </div>
//                                 <div class="icon-text">
//                                     <h3>{data.cuadros[1].titulo}</h3>
//                                     <p>
//                                         <div class="container">
//                                         <ul>
//                                             <li>Instalación de red domiciliaria</li>
//                                             <li>Mantenimiento y reparaciones</li>
//                                             <li>Instalación de artefactos</li>
//                                             <li>Habilitación ECOGAS</li>
//                                             <li>Planos aprobados</li>
//                                             <li>Trámites y formularios</li>
//                                             <li>Pérdida de medidor</li>
//                                             <li>Control y colocación de ADT</li>
//                                             <li>Sistema tradicional y termofusión</li>
//                                             <li>Sanitarios, cañerías y perdidas</li>
//                                         </ul>                                            
//                                         </div>
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                     <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
//                         <Link to="/refrigeracion">
//                             <div class="each-icon">
//                                 <div class="icon-wrap">
//                                     {iconRefrigeracion}
//                                 </div>
//                                 <div class="icon-text">
//                                     <h3>{data.cuadros[2].titulo}</h3>
//                                     <p>
//                                         <div class="container">
//                                         <ul>
//                                             <li>Técnico matriculado</li>
//                                             <li>Mantenimiento preventivo</li>
//                                             <li>Carga de refrigerante</li>
//                                             <li>Desinstalación e Instalación por mudanza</li>
//                                             <li>Balance térmico</li>
//                                             <li>Reparación de lavarropas</li>
//                                         </ul>
//                                         </div>
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                     <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
//                         <Link to="/refacciones">
//                             <div class="each-icon">
//                                 <div class="icon-wrap">
//                                     {iconRefacciones}
//                                 </div>
//                                 <div class="icon-text">
//                                     <h3>{data.cuadros[3].titulo}</h3>
//                                     <p>
//                                         <div class="container">
//                                         <ul>
//                                             <li>Pintura en general</li>
//                                             <li>Impermeabilizaciones en techos</li>
//                                             <li>Refacciones en general</li>
//                                             <li>Herrería</li>
//                                         </ul>
//                                         </div>
//                                     </p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </>
//     );
// }