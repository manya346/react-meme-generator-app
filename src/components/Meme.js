import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img src={memeImage} className="meme-image"/>
    </main>
  );
}
