import React from 'react';


//IMAGENES
import logo from '../../images/logo.png'

export default function Header() {
        return (
            <>
            <header id="Header">
                <nav class="main-navigation">
                <div class="container">
                    <div class="row">
                    <div class="col">
                        <div class="logo">
                        <a>
                        <img src={logo} alt="Logo"/>
                        </a>
                        </div>
                    </div>
                    <div class="col text-right">
                        <div class="menu-wrap">
                        <div id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
                <div class="mobile-menu">
                <ul>
                    <li><a href="#HeroBanner" class="smooth-scroll">Home</a></li>
                    <li><a href="#Gain" class="smooth-scroll">Gain The Knowledge</a></li>
                    <li><a href="#Laptop" class="smooth-scroll">Improve your business </a></li>
                    <li><a href="#Video" class="smooth-scroll">Video</a></li>
                    <li><a href="#OurWork" class="smooth-scroll">Our Work</a></li>
                    <li><a href="#ContactUs" class="smooth-scroll">Get In Touch</a></li>
                </ul>
                </div>
            </header>
            </>
        );
}