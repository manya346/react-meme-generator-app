import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        randomImage: url
      }
    });
  }
  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Top Text"
        ></input>
        <input
          className="form-input"
          type="text"
          placeholder="Bottom Text"
        ></input>
        <button onClick={getMemeImage} className="form-button">
          Get New Meme Image
        </button>
      </div>
      <img src={meme.randomImage} alt="Meme" className="meme-image"/>
    </main>
  );
}
