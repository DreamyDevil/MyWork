import React,{ useState} from 'react';
import PlaylistComp from './PlaylistComp';
import EuropaPlus from './image/EuropaPlus.png';
import Record from './image/Record.png';
import HitFM from './image/HitFM.png';
import NewRadio from './image/NewRadio.png';
import AutoRadio from './image/AutoRadio.png';
import RadioEnergy from './image/RadioEnergy.png';
import HumorFM from './image/HumorFM.png';
import RussianRadio from './image/RussianRadio.png';
import RetroFM from './image/RetroFM.jpg';
import HaipFM from './image/HaipFM.jpg';
import RussianWave from './image/RussianWave.png';
import RadioPremium from './image/RadioPremium.png';
import MarusiaFM from './image/MarusiaFM.jpg';
import './RadioPlaylist.css';
import * as IoIcons from "react-icons/io";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';



function RadioPlaylist() {
    let MusicArr=[
        <PlaylistComp src={EuropaPlus} href='https://europaplus.hostingradio.ru:8014/europaplus320.mp3' />,
        <PlaylistComp src={Record} href='https://air3.radiorecord.ru:8000/rr_128'/>,
        <PlaylistComp src={HitFM} href='https://hitfm.hostingradio.ru/hitfm128.mp3'/>,
        <PlaylistComp src={NewRadio} href='https://icecast-newradio.cdnvideo.ru/newradio3'/>,
        <PlaylistComp src={AutoRadio} href='https://pub0101.101.ru/stream/air/aac/64/100'/>,
        <PlaylistComp src={RadioEnergy} href='https://pub0101.101.ru/stream/air/aac/64/99'/>,
        <PlaylistComp src={HumorFM} href='https://pub0102.101.ru:8443/stream/air/aac/64/102'/>,
        <PlaylistComp src={RussianRadio} href='https://rusradio.hostingradio.ru/rusradio96.aacp'/>,
        <PlaylistComp src={RetroFM} href='https://emgregion.hostingradio.ru:8064/moscow.retrofm.mp3'/>,
        <PlaylistComp src={HaipFM} href='https://appradio2.volna.top/HypeFM'/>,
        <PlaylistComp src={RussianWave}/>,
        <PlaylistComp src={RetroFM}/>,
        <PlaylistComp src={RadioPremium}/>,
        <PlaylistComp src={MarusiaFM}/>,
    ];

    const [play,setPlay]=useState(0);

    const Left = () => {
        play === 0 ? setPlay(-880 * (MusicArr.length -13 )) : setPlay (play + 880);
    };

    const Right = () => {
        play === -880 * (MusicArr.length - 13) ? setPlay(0) : setPlay(play - 880);
    };
    console.log(play)
    return (
        <div className='radio-channels'>
            <div className='tittle-playlist'>
                <a href=''>RadioChannels</a>
            </div>  
            <div className="btn">
                <IconContext.Provider value={{color:'#646464',size: '34px'}}>
                    <Link to="#" className='Left'>
                        <IoIcons.IoIosArrowDropleftCircle onClick={Left}/>
                    </Link>
                    <Link to="#" className='Right'>
                        <IoIcons.IoIosArrowDroprightCircle onClick={Right}/>
                    </Link>
                </IconContext.Provider>
            </div>
            <div className='playlist-radio'>
                {
                    MusicArr.map((item,index) => {
                        return (
                            <div key={index} className='swipe-playradio' style={{transform:`translateX(${play}%)`}}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        </div>    
    );
}

export default RadioPlaylist

