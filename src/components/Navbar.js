import React from 'react'
import logo from "../components/assets/img/logo.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
    let toggleBtn = () => {
        if (document.getElementById("mobileList").style.display === "block") {
            document.getElementById("mobileList").style.display = "none";
            console.log("h");
        }
        else {
            document.getElementById("mobileList").style.display = "block";
        }
    }
    return (
        <header className="header">
            <nav className="navbar1">
                <div className="nav_left">
                    <img src={logo} alt="" srcSet=""/>
                    <div className="company_name">
                        <span>SnowCare Refrigreation</span>
                        <span className='company_span2'>AN ISO 9001 : 2005 CERTIFIED COMPANY</span>
                    </div>
                </div>
                <div className="nav_right">
                    <ul className="nav_right_1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link  to="/about">About</Link></li>
                        <li><Link  to="/product">Product</Link></li>
                        <li><Link  to="/client">Client</Link></li>
                        <li><Link  to="/contact">Contact</Link></li>
                        <li className='brochure'><Link to="/">Brochure</Link></li>
                    </ul>
                    <ul className="nav_right_2">
                        <button id='menuBtn' className='hamburger_btn' onClick={toggleBtn}>
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </button>
                    </ul>
                </div>
            </nav>
            <hr />
            <div id="mobileList" className="nav_mobile">
                <ul>
                    <li><Link  to="/">Home</Link></li>
                    <li><Link  to="/about">About</Link></li>
                    <li><Link  to="/product">Product</Link></li>
                    <li><Link  to="/client">Client</Link></li>
                    <li><Link  to="/contact">Contact</Link></li>
                    <li className='brochure1'><Link  to="/">Brochure"</Link></li>
                </ul>
            </div>
        </header>
    )
}

