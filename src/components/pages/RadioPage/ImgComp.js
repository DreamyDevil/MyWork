import React from 'react'

function ImgComp({ src }) {
    let imgStyles={
        width:100+"%",
        height:100+"%",
    }
    return <a href="">< img src={src} alt="slide-img" style={imgStyles}></img></a>
}

export default ImgComp
