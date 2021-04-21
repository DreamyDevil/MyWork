import React,{ useState} from 'react';
import '../RadioPage/Swiper.css';
import ImgComp from './ImgComp';
import i1 from './image/1.jpg';
import i2 from './image/2.jpg';
import i3 from './image/3.jpg';
import i4 from './image/4.jpg';
import i5 from './image/5.jpg';
import i6 from './image/6.jpg';
import i7 from './image/7.jpg';
import i8 from './image/8.jpg';
import i9 from './image/9.jpg';
import i10 from './image/10.jpg';
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons';

    function RadioSwiper() {
        let SwiperArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
        <ImgComp src={i5} />,
        <ImgComp src={i6} />,
        <ImgComp src={i7} />,
        <ImgComp src={i8} />,
        <ImgComp src={i9} />,
        <ImgComp src={i10} />
        ];
        
        const [x,setX] = useState(0)
        
        const goLeft = () => {
            x === 0 ? setX(-100 * (SwiperArr.length - 2)) : setX(x + 100);
        };
    
        const goRight = () => {
            x === -100 * (SwiperArr.length - 2) ? setX(0) : setX(x - 100);
        };

        return (
            <div className="swiper">
                {
                    SwiperArr.map((item,index) => {
                        return (
                            <div key={index} className="swipe" style={{transform:`translateX(${x}%)`}}>
                                {item}
                            </div>
                        );
                    })
                }
                <IconContext.Provider value={{color:'#fff',size: '34px'}}>
                    <button id="goLeft"  onClick={goLeft}>
                        <FaIcons.FaChevronLeft className='iconleft'/>
                    </button>
                    <button id="goRight" onClick={goRight}>
                        <FaIcons.FaChevronRight /> 
                    </button>
                </IconContext.Provider>
            </div>
        );
    }
            
    export default RadioSwiper
