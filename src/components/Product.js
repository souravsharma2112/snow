import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import image1 from "../components/assets/img/bg/sectionbg.png";
import Section1 from './Section1';
import Productitem from './Productitem';
export default function Product() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Section1 sectionName={"Product"}/>
                <section class="section2">
                    <div className="section_container">
                    <div class="product_sec2_container">
                        <ul>
                            <Productitem productImage = {image1} productName = {"Sourav"}/>
                            <Productitem productImage = {image1} productName = {"Sourav"}/>
                            <Productitem productImage = {image1} productName = {"Sourav"}/>
                            <Productitem productImage = {image1} productName = {"Sourav"}/>
                            <Productitem productImage = {image1} productName = {"Sourav"}/>
                        </ul>
                    </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
