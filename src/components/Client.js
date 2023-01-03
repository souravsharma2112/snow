import React from 'react'
import Navbar from './Navbar'
import './client.css'
import Footer from './Footer'
import Section1 from './Section1'
import ClientItem from './ClientItem'
import image1 from "../components/assets/img/bg/sectionbg.png";
export default function Client() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Section1 sectionName={"Client"} />
                <section className="section2">
                    <div className="section_container">
                        <div class="client_container">
                            <ul>
                                <ClientItem clientImage={image1}/>
                                <ClientItem clientImage={image1}/>
                                <ClientItem clientImage={image1}/>
                                <ClientItem clientImage={image1}/>
                                <ClientItem clientImage={image1}/>
                                
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
