import React from 'react';
import "./styles/navbar.css";
import {useNavigate} from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='nav-main'>
            <div className = 'brand-name' onClick={() => navigate("/")}>Gradient Productions</div>
            <div className='nav-right'>
                <div onClick={() => navigate("/portfolio")}>Portifolio</div>
                <div onClick={() => navigate("/contacts")}>Contacts</div>
                <div onClick={() => navigate("/rent")}>Shop</div>
            </div>
        </div>

    )
}