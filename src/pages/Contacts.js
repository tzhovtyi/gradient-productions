import React from 'react';
import Navbar from '../components/Navbar';
import "./styles/contacts.css"

export default function Contacts() {
    return (
        <div className='contacts-main'>
            <Navbar/>
            <h3>Contact Information</h3>
            <p>Email: aaa@aa <br/>Phone: +1(222)3333333 <br/>Address: Cedar City, UT, 84720</p>
            <h3>Social Media</h3>
            <div className='icons-container'>
                <a target="_blank" href="https://www.youtube.com/watch?v=1-Rs6Wz-Rdw&t=64s&ab_channel=%D0%A8%D0%B5%D1%84-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9%D0%95%D0%BC%D0%B5%D0%BB%D1%8C%D1%8F%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE" class="fa fa-youtube"></a>
                <a target="_blank" href="https://www.youtube.com/watch?v=1-Rs6Wz-Rdw&t=64s&ab_channel=%D0%A8%D0%B5%D1%84-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9%D0%95%D0%BC%D0%B5%D0%BB%D1%8C%D1%8F%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE" class="fa fa-instagram"></a>
                <a target="_blank" href="https://www.youtube.com/watch?v=1-Rs6Wz-Rdw&t=64s&ab_channel=%D0%A8%D0%B5%D1%84-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9%D0%95%D0%BC%D0%B5%D0%BB%D1%8C%D1%8F%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE" class="fa fa-facebook"></a>
            </div>
        </div>
    )
}