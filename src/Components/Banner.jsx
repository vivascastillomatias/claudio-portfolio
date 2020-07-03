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
                                        <a>
                                        Click!
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"/></svg> */}
                                        </a>
                                    </div>
                                    <div class="cta-2">
                                        <a>Click!</a>
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
                                        <a>Click!</a>
                                    </div>
                                    <div class="cta-2">
                                        <a>Click!</a>
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