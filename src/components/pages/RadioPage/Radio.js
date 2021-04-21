import React from 'react'
import RadioPlaylist from './RadioPlaylist';
import  RadioSwiper  from './RadioSwiper';
import './Swiper.css';


function Radio() {
    return (
        <div className='radio'>
            <div className='radio-top-news'>
                <RadioSwiper/>
            </div>
            <div className='radio-top-allRadio'>
                <RadioPlaylist/>
            </div>
            <div className='radio-center-tittle w-55'>
                <p>Your favorite Russian songs are always with you!</p>
            </div>
            <div className='radio-bottom'>
                
            </div>
        </div>
    )
}

export default Radio
