import React from 'react';
import './Meme.css';

const Meme = ({meme}) => {
    return (
        <div class='meme-wrapper'>
            <span class='topText'>{meme.topText}</span>
            <img src={meme.img}/>
            <span class='bottomText'>{meme.bottomText}</span>
            <button id={meme.id}>X</button>
        </div>
    )
}

export default Meme;