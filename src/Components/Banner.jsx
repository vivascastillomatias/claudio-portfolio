import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

export default function Banner() {
    const options = {
        items: 1,
        rewind: true,
        autoplay: true
    };
    return (
        <>
        <section id="HeroBanner">
                <OwlCarousel options={options} >
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                    <h1>Our work is dedicated to the<br /> prosperity of our clients! </h1>
                                    <p> Lorem ipsum dolor sit amet, consec tetuer
                                    <br /> adipiscing elit. Praesent vestibu lum molestie
                                    <br />lacus. Aenean nonummy hendrerit
                                    <br />maurishasellus </p>
                                    <div class="bannet-cta">
                                    <div class="cta-1">
                                        
                                    </div>
                                    <div class="cta-2">
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div id="BannerSlider">
                        <div class="item">
                            <div class="container">
                            <div class="row">
                                <div class="col">
                                <div class="banner-text">
                                    <h1>Our work is dedicated to the<br /> prosperity of our clients! </h1>
                                    <p> Lorem ipsum dolor sit amet, consec tetuer
                                    <br /> adipiscing elit. Praesent vestibu lum molestie
                                    <br />lacus. Aenean nonummy hendrerit
                                    <br />maurishasellus </p>
                                    <div class="bannet-cta">
                                    <div class="cta-1">
                                        
                                    </div>
                                    <div class="cta-2">
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                </OwlCarousel>
        </section>
        </>
    );
}