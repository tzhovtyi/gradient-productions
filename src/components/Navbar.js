import React, {useState} from 'react';
import "./styles/navbar.css";
import {useNavigate} from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    return (
        <div className='nav-main'>
            <div className='mobile-bar'>
                <div className = 'brand-name' onClick={() => navigate("/")}>Gradient Productions</div>
                <a onClick={()=> setMenu(prevState => !prevState)} href='#' className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
            </div>

            <div className = {`nav-right ${menu &&'menu-active'}`}>
                <div onClick={() => navigate("/portfolio")}>Portifolio</div>
                <div onClick={() => navigate("/contacts")}>Contacts</div>
                <div onClick={() => navigate("/rent")}>Shop</div>
            </div>
        </div>
    )
}