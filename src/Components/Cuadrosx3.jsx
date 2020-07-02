import React from 'react';

//Imagenes
import imagen1 from '../images/image-1.jpg';
import imagen2 from '../images/image-2.jpg';
import imagen3 from '../images/image-3.jpg';
;
export default function Cuadros() {

    return (
        <>
        <section id="OurWork" class="clearfix">
            <div class="filter-box clearfix">
                <div class="each-box all scale-anm branding">
                    <div class="each-box-img">
                        <img src={imagen1} alt=""/>
                    </div>
                    <div class="each-box-text-wap">
                    <div class="each-box-text">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</p>
                        {/* <a title="Read More" href="#" target="_blank"><i class="fa fa-arrow-right" aria-hidden="true"></i></a> */}
                    </div>
                    </div>
                </div>
                <div class="each-box all scale-anm marketing web-design">
                    <div class="each-box-img">
                    <img src={imagen2} alt=""/>
                    </div>
                    <div class="each-box-text-wap">
                    <div class="each-box-text">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</p>
                        {/* <a title="Read More" href="#" target="_blank"><i class="fa fa-arrow-right" aria-hidden="true"></i></a> */}
                    </div>
                    </div>
                </div>
                <div class="each-box all scale-anm media">
                    <div class="each-box-img">
                    <img src={imagen3} alt=""/>
                    </div>
                    <div class="each-box-text-wap">
                    <div class="each-box-text">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</p>
                        {/* <a title="Read More" href="#" target="_blank"><i class="fa fa-arrow-right" aria-hidden="true"></i></a> */}
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}