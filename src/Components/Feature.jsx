import React from 'react';
import { Link } from "react-router-dom";

export default function Feature(props) {
    const renderizarItems = (items) => {
        return items.map((t, idx) => <li key={idx}>{t}</li>);
    }

    return (
        <>
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <Link to="/electricidad">
                <div class="each-icon">
                    <div class="icon-wrap">
                        {props.data.icon}
                    </div>
                    <div class="icon-text">
                        <h3>{props.data.titulo}</h3>
                        <p>
                            <div class="container">
                            <ul>
                                {renderizarItems(props.data.cuerpo)}
                            </ul>
                            </div>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
}