import React from 'react';
import Meme from './Meme';
import {useSelector} from 'react-redux';

const MemeSpace = () => {
    const memes = useSelector(store => store.memes);

    return (
        <div id='MemeSpace'>
            {memes.map((meme) => {
                return <Meme key={meme.id} meme={meme}/>
            })}
        </div>
    )
}

export default MemeSpace;