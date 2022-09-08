import React from 'react';
import Navbar from '../components/Navbar.js';
import "./styles/portfolio.css";

export default function Portfolio() {
    return (
        <div className='portfolio-main'>
            <Navbar />
            <h3 className='headerPortfolio'>Portfolio</h3>
            <p className='description'>Here you can find some examples of our work, they include video files, audios and photos!</p>
            <div className='videoThumbnails'>
                <h3>Videos</h3>
                <div className='containerVideos'>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                    <div className='videoEach'></div>
                </div>
            </div>
            <div className='photoThumbnails'>
                <h3>Photos</h3>
                <div className='containerPhotos'>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                    <div className='photoEach'></div>
                </div>
            </div>
            <div className='audioFiles'>
                <h3>Audios</h3>
                <div className='containerAudios'>
                    <div className='audioEach'></div>
                    <div className='audioEach'></div>
                    <div className='audioEach'></div>
                    <div className='audioEach'></div>
                </div>
            </div>

        </div>   
    )
}