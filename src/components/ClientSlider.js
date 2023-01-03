import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg5 from "../components/assets/img/clients/client1.png";
export default class ClientSlider extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    }
                }
            ]
        };
        

        return (
            <>
                <section className="section4">
                    <div className="section_container slider_container">
                        <div className="client_slide_container">
                            <div className="slick_slider_name">
                                <span>Our</span>
                                <h2>Satisfied Clients</h2> 
                            </div>
                            <Slider className='slider_client_section' {...settings}>
                                <div className="slide_box">
                                    <div className="s_client_image">
                                        <img src={bg5} alt="" srcset="" />
                                    </div>
                                    <div className="s_client_line">

                                    </div>
                                </div>
                                <div className="slide_box">
                                    <div className="s_client_image">
                                        <img src={bg5} alt="" srcset="" />
                                    </div>
                                    <div className="s_client_line">

                                    </div>
                                </div>
                                <div className="slide_box">
                                    <div className="s_client_image">
                                        <img src={bg5} alt="" srcset="" />
                                    </div>
                                    <div className="s_client_line">

                                    </div>
                                </div>
                                <div className="slide_box">
                                    <div className="s_client_image">
                                        <img src={bg5} alt="" srcset="" />
                                    </div>
                                    <div className="s_client_line">

                                    </div>
                                </div>
                                <div className="slide_box">
                                    <div className="s_client_image">
                                        <img src={bg5} alt="" srcset="" />
                                    </div>
                                    <div className="s_client_line">

                                    </div>
                                </div>
                                
                                
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
