import React from 'react'
import myPictureIMG from "../images/image0.jpg"
import "../styles/aboutmeparagraph.css"
import AboutAnimation from './AboutAnimation'
const AboutMeParagraph = () => {

    const text = "Hello, my name is Dominick Simone. I am a 19 year old Full Stack Developer from Lewisburg, PA. I graduated from the full stack coding bootcamp at the University of Pennsylvania powered by Trilogy on November 13th, 2021. I am currently looking for a full time development job!"


    return (
        <div className="aboutParaComponent">
            <div className="aboutParaDiv">
                <h3 className="aboutParaText">{text}</h3>
            </div>
            <div className="aboutParaImgDiv">
                <img className="aboutParaImg" src={myPictureIMG} />
            </div>
        </div>
    )
}

export default AboutMeParagraph
