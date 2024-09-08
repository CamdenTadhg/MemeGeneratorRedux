import React from 'react';
import {useDispatch} from 'react-redux';
import './Meme.css';

const Meme = ({meme}) => {
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        dispatch({type: 'DELETE', payload: event.target.id});
    }

    return (
        <div class='meme-wrapper'>
            <span class='topText'>{meme.topText}</span>
            <img src={meme.img}/>
            <span class='bottomText'>{meme.bottomText}</span>
            <button id={meme.id} class="delete" onClick={handleDelete}>X</button>
        </div>
    )
}

export default Meme;