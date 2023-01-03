import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './about.css';
import bg111 from "../components/assets/img/bg111.jpg";
import Section1 from './Section1';

export default function () {
    return (
        <>
        <Navbar/>
            <main class="main">
                <Section1 sectionName = {"About"}/>
                <section class="section2">
                    <div class="section2_container">
                        <div class="section2_img">
                            <img src={bg111} alt="" srcset=""/>
                        </div>
                        <div class="section2_content">
                            <div class="about_head">
                                <span>About</span>
                                <h2>SnowCare Refrigretion</h2>
                            </div>
                            <div class="about_content">
                                <p>We are one of the leading brand in India offering best in class refrigeration units for storage and processing of food Bradacis, we are also specialized in controlled environment solutions to provide excellent working conditions. You can trust Snowfall as an end to end solution for refrigeration and air conditioning.</p>
                                <p class="para2"><strong>What we offer to our precious clients</strong></p>
                                <p class="para3">We are stockiest of leading brands-availability of all kind of Seatin class
                                    Refrigeration systems without delay 
                                        We are stockiest of spare parts - 100% service bellup without delay 
                                            Dealer of leading brands-bassle free warranty replacements and services on time</p>
                                        <p class="para4">Inhouse service centre for refrigeration compressors
                                            Inhouse technicians-easy service and repair</p>
                                    </div>
                            </div>
                        </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
