import React from 'react'


function PlaylistComp({ src , href}) {
    let imageRadioPlaylist={
        width:100+"%",
        height:100+"%",
    }
    return <a href={href} target="_blank">< img src={src} alt="slide-radio" style={imageRadioPlaylist}></img></a>
}

export default PlaylistComp