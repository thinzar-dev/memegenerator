import React from "react";
import memesData from "../memesData";

function MemeSection() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        alt: 'It is not easy'
    })

    const [memeImage, setMemeImage] = React.useState(memesData)

    let url, alt

    function handleClick() {
        
        const memesArray = memeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        alt = memesArray[randomNumber].name
        
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url,
            alt: alt
        }))

    }

    function changeHandler(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(        
        <main className="memeSection">
            <p>{url}</p>
            <div className="form">
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Top Text"
                        className="form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={changeHandler}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        className="form-input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={changeHandler}
                    />
                </div>
                <button onClick={handleClick} className="form-button">Get a new meme image 🖼</button>
                <div className="meme">
                    <img src={meme.randomImage} alt={meme.alt} className="meme-image" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default MemeSection