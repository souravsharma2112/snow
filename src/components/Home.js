import React from 'react'
import './navbar.css';
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ClientSlider from './ClientSlider';
import VendorSlider from './Vendorslider';
import QualitySlider from './QualitySlider';
import bg1 from "../components/assets/img/bg/bg1.jpg";
import bg2 from "../components/assets/img/bg/bg2.jpg";
import bg3 from "../components/assets/img/bg/bg3.jpg";
import image1 from "../components/assets/img/bg/sectionbg.png";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="main">
                <section className="section1_home">
                    <div id="carouselExampleDark" className="carousel image_slide_main carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="section1_div carousel-inner">
                            <div className="image1_div carousel-item active" data-bs-interval="10000">
                                <div className="image_1_image">
                                    <img src={bg2} alt="" />
                                </div>
                                <div className="image_content">
                                    <h1>Welcome to SnowCare Refrigreation</h1>
                                </div>
                            </div>
                            <div className="image1_div carousel-item" data-bs-interval="2000">
                                <div className="image_1_image">
                                    <img src={bg3} alt="" />
                                </div>
                                <div className="image_content">
                                    <h1>Welcome to SnowCare Refrigreation</h1>
                                </div>
                            </div>
                            <div className="image1_div carousel-item">
                                <div className="image_1_image">
                                    <img src={bg1} alt="" />
                                </div>
                                <div className="image_content">
                                    <h1>Welcome to SnowCare Refrigreation</h1>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <section className="section2 section2_home">
                    <div className="section_container">
                        <div className="section_about">
                            <div className="s_about_box">
                                <div className="s_about_image_d">
                                    <img src={image1} alt="" />
                                </div>
                            </div>
                            <div className="s_about_box s_about_content">
                                <div className="s_about_content_d">
                                    <span>About</span>
                                    <h2>SnowCare Refrigeration</h2>
                                </div>
                                <div className="s_about_p_d">
                                    <p>We are one of the leading brand in India offering best in class refrigeration units for
                                        storage and processing of food Bradacis, we are also specialized in controlled environment
                                        solutions to provide excellent working conditions. You can trust Snowfall as an end to end
                                        solution for refrigeration and air conditioning.</p>
                                </div>
                                <div className="s_about_btn">
                                    <Link to="/about">About us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section3">
                    <div className="section_container section3_container ">
                        <div className="section3_1 flex">
                            <h2>Why Choose Us?</h2>
                        </div>
                        <div className="section3_2 flex">
                            <h2>We are Specialized In</h2>
                        </div>
                        <div className="section3_3">
                            <div className="sec_3_box">
                                <h4>Ripening Chamber</h4>
                                <p>Temperature Range: 12 °C to 18 °C <br />
                                    Require high air flow <br />
                                    Suitable for products like banana,mango etc.</p>
                            </div>
                            <div className="sec_3_box">
                                <h4>Chiller Room</h4>
                                <p>Temperature Range: 0 °C to 10 °C <br />
                                    Require moderate or low air flow <br />
                                    Suitable for products like fruits,vegetables, <br /> pharmaceutical, flowers, dairy etc</p>
                            </div>
                            <div className="sec_3_box">
                                <h4>Freezer Room</h4>
                                <p> Temperature Range: 12 °C to 18 °C <br />
                                    Require high air flow <br />
                                    Suitable for products like banana,mango etc.</p>
                            </div>
                            <div className="sec_3_box">
                                <h4>Blast Freezer</h4>
                                <p>Temperature Range:-30 °C to -45°C
                                    Require high air flow <br />
                                    Suitable products like ice-cream, sea food, meat, poultry etc</p>
                            </div>
                            <div className="sec_3_box">
                                <h4>Blast Chiller</h4>
                                <p>Temperature Range:-30 °C to -45°C
                                    Require high air flow
                                    Suitable products like ice-cream, sea food, meat,  poultry etc</p>
                            </div>
                            <div className="sec_3_box">
                                <h4>Processing Room</h4>
                                <p>Temperature Range: 5 °C to 20 °C <br />
                                    Require moderate or low air flow <br />
                                    Suitable for anti rooms & food processing area</p>
                            </div>
                        </div>
                    </div>
                </section>
                <QualitySlider />
                <section className="section5">
                    <div className="section_container section5c">
                        <div className="slick_slider_name">
                            <span>Our Statistics</span>
                            <h2>We Expert Our Goals
                                To Provide Best</h2>
                        </div>
                        <div className="section5_content">
                            <ul>
                                <li>
                                    <div className="section5_1">
                                        <div className="section5_first">
                                            <span class="material-symbols-outlined">
                                                groups
                                            </span>
                                        </div>
                                        <div className="section5_second">
                                            <h2>5+</h2>
                                        </div>
                                        <div className="section5_last">
                                            <h2>Years of Experience</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="section5_1">
                                        <div className="section5_first">
                                            <span class="material-symbols-outlined">
                                                home_repair_service
                                            </span>
                                        </div>
                                        <div className="section5_second">
                                            <h2>1500+</h2>
                                        </div>
                                        <div className="section5_last">
                                            <h2>Happy Customer</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="section5_1">
                                        <div className="section5_first">
                                            <span class="material-symbols-outlined">
                                                brightness_high
                                            </span>
                                        </div>
                                        <div className="section5_second">
                                            <h2>1220+</h2>
                                        </div>
                                        <div className="section5_last">
                                            <h2>Quality Products</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="section5_1">
                                        <div className="section5_first">
                                            <span class="material-symbols-outlined">
                                                local_shipping
                                            </span>
                                        </div>
                                        <div className="section5_second">
                                            <h2>600+</h2>
                                        </div>
                                        <div className="section5_last">
                                            <h2>Fastest Delivery</h2>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="section5_1">
                                        <div className="section5_first">
                                            <span class="material-symbols-outlined">
                                                support_agent
                                            </span>
                                        </div>
                                        <div className="section5_second">
                                            <h2>5500+</h2>
                                        </div>
                                        <div className="section5_last">
                                            <h2>Supports Case</h2>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <VendorSlider />
                <ClientSlider />
            </main>
            <Footer />
        </>
    )
}
