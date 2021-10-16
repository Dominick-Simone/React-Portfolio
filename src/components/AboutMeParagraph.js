import React from 'react'
import myPictureIMG from "../images/image0.jpg"
import "../styles/aboutmeparagraph.css"
const AboutMeParagraph = () => {
    return (
        <div className="aboutParaComponent">
            <div className="aboutParaDiv">
            <img className="aboutParaImg" src={myPictureIMG} />
            <h3 className="aboutParaText">Hello, my name is Dominick Simone. I am a 19 year old Full Stack Developer from Lewisburg, PA. I graduated from the full stack coding bootcamp at the University of Pennsylvania powered by Trilogy on November 13th, 2021.</h3>
        </div>
        </div>
    )
}

export default AboutMeParagraph
