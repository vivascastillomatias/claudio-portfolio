import React from 'react';

const iconLocation = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#dd8633" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
const iconMailTo = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#dd8633" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
const iconPhone = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#dd8633" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
const iconWorker = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#dd8633" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/></svg>


export default function Contacto() {
    return (
        <>
        <div  class='footer footer-contact-boxes'>
            <div  class='footer-content'>
                <div class="container gridContainer">
                    <div class="row text-center">
                        <div class="col-sm-3">
                            <div class="hoverAnimacion">
                                {iconLocation}
                                <p>Córdoba - Argentina</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="hoverAnimacion">
                                {iconWorker}
                                <p>Presupuesto sin cargo</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="hoverAnimacion">
                                {iconPhone}
                                <p>351 2446662 / 351 3000000 (WhatsApp)</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="hoverAnimacion">
                                {iconMailTo}
                                <p>castilloservicios@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}