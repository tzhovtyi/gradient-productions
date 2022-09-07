import React from 'react';
import Navbar from '../components/Navbar';
import "./styles/home.css";

export default function Home() {
    return (
        <div className='home-main'>
            <Navbar/>
            <div className='videos'>Videos from concert <br/> placeholder</div>
            <h3>About the Company</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque nihil voluptas architecto rerum recusandae voluptatum autem deleniti earum, excepturi voluptates esse est numquam. Quod esse, optio eveniet quis eligendi officiis inventore delectus architecto necessitatibus, expedita dignissimos voluptatibus saepe repellendus. Dolor ab expedita repudiandae veniam nisi velit ex amet fugit sed nemo! Itaque, veniam nihil error distinctio quas hic adipisci autem nemo provident quibusdam minima enim dolore? Maiores, ipsam laborum?</p>
            <h3>Partners</h3>
            <div className='collab'></div>
            <h3>Artists that we worked with</h3>
            <div className='collab'></div>
            <div className='info'>Look, Lois, I am small text</div>
        </div>
    )
}