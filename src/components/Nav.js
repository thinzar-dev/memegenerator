import React from 'react';
import meme from '../images/meme.png'

function Nav() {
    return(
        <header className='memeHeader'>
            <img src={meme} alt='Meme'/>
            <h1 className='header-title'>Meme Generator</h1>
            {/* // <h3 className='header--project'>React Course - Project 3</h3> */}
        </header>
    )
}

export default Nav