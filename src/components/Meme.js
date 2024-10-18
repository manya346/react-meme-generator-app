import React from "react"

export default function Meme(){
        return(
            <main>
                <form className="form">
                    {/* <h3 className="text-input">Top Text</h3> */}
                    <input className="form-input" type="text" placeholder="Top Text"></input>
                    {/* <h3 className="text-input">Bottom Text</h3> */}
                    <input className="form-input" type="text" placeholder="Bottom Text"></input>
                    <button className="form-button">Get New Meme Image</button>
                </form>
            </main>
        )
}