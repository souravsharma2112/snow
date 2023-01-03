import React from 'react'
import image1 from "../components/assets/img/bg/sectionbg.png";
export default function Section1(props) {
    return (
        <>
            <section class="section1">
                <div class="section1_container">
                    <div class="about_intro">
                        <img src={image1} alt="" srcset="" />
                        <div class="image_black">
                            <h1>
                                {props.sectionName}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
