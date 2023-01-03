import React from 'react'
import './contact.css';
// import './about.css';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from "../components/assets/img/bg/sectionbg.png";
import Section1 from './Section1';
export default function Contact() {
    return (
        <>
            <Navbar />
            <main class="main">
                <Section1 sectionName={"Contact Us"} />
                <section class="section2">
                    <div className="section_container">
                        <div class="s2_first">
                            <div class="s2_first_one">
                                <h1>Contact</h1>
                                <h2>If You Have Any Question <br />
                                    Drop A Message</h2>
                            </div>
                        </div>
                        <div class="s2_second">
                            <div class="s2_container">
                                <div class="s2_second_1">
                                    <span class="material-symbols-outlined contact_icon">
                                        location_on
                                    </span>
                                    <span class="contact_content">Pirgacha, Barasat, Kolkata <br />
                                        (WB) 743 294</span>
                                </div>
                                <div class="s2_second_1">
                                    <span class="material-symbols-outlined contact_icon">
                                        call
                                    </span>
                                    <span class="contact_content">+91 6291711674 <br />
                                        +91 9330634629</span>
                                </div>
                                <div class="s2_second_1">
                                    <span class="material-symbols-outlined contact_icon">
                                        alternate_email
                                    </span>
                                    <span class="contact_content c3">snowfallrefrigeration4@gmail.com <br />
                                        info@snowfall-refrigeration.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section3_contact">
                    <div class="contact_section3_container">
                        <div class="left_s3">
                            <form action="#">
                                <div class="first_form">
                                    <input class="first_in" type="text" name="name" id="name" placeholder="Name" />
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div class="second_form">
                                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                                </div>
                                <div class="last_form">
                                    <textarea name="textarea" id="textarea" rows="5" placeholder="Your Message..."></textarea>
                                </div>
                                <div class="submit_btn">
                                    <button type="submit">Send</button>
                                    <button type="reset">Reset</button>
                                </div>
                            </form>
                        </div>
                        <div class="right_s3"></div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
