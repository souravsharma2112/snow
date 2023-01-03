import React from 'react'
import './footer.css';
import logo from '../components/assets/img/bg/finallogo.png'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer_1">
                    <div class="footer_intro">
                        <div class="footer_comapany_name">
                            <div className="nav_left">
                                <img src={logo} alt="" srcSet="" />
                                <div className="company_name">
                                    <span>SnowCare Refrigreation</span>
                                    <span className='company_span2'>AN ISO 9001 : 2005 CERTIFIED COMPANY</span>
                                </div>
                            </div>
                        </div>
                        <div class="footer_company_discription footer_container">
                            <p>We are one of the leading brand in India offering best in class refrigeration units for storage and processing of food Bradacis, we are also specialized in controlled environment solutions to provide excellent working conditions. You can trust Snowfall as an end to end solution for refrigeration and air conditioning.</p>
                        </div>
                    </div>
                    <div class="footer_contact">
                        <div class="contact_name">
                            <h2>Contact Info</h2>
                            <div class="div_line"></div>
                        </div>
                        <div class="contact_container footer_container">
                            <ul>
                                <li>
                                    <div class="footer_icon">
                                        <span class="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div class="footer_icon_content">
                                        <span>SnowCare Refrigeration LLP<br />Pirgacha, Barasat, Kolkata (WB) 743 294</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer_icon">
                                        <span class="material-symbols-outlined">call</span>
                                    </div>
                                    <div class="footer_icon_content">
                                        <span>+91 6291711674/+91 9330634629</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer_icon">
                                        <span class="material-symbols-outlined">mail</span>
                                    </div>
                                    <div class="footer_icon_content">
                                        <span>snowcarerefrigeration4@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="footer_icon">
                                        <span class="material-symbols-outlined">mail</span>
                                    </div>
                                    <div class="footer_icon_content">
                                        <span>info@snowcare-refrigeration.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="our_location">
                        <div class="contact_name">
                            <h2>Our Location</h2>
                            <div class="div_line"></div>
                        </div>
                        <div class="location_container footer_container"></div>
                    </div>
                </div>
                <hr />
                <div class="footer_1 footer_2">
                    <div class="footer_discription">
                        Copyright &copy; 2023 SnowCare Refrigeration All &copy; Copyright Reserved.
                    </div>
                    <div class="social_account">
                        <ul>
                            <li><a href="#"><i class="uil uil-facebook"></i></a></li>
                            <li><a href="#"><i class="uil uil-twitter"></i></a></li>
                            <li><a href="#"><i class="uil uil-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
