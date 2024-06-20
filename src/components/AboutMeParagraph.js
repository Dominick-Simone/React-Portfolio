import React from 'react'
import myPictureIMG from "../images/image0.jpg"
import "../styles/aboutmeparagraph.css"
import AboutAnimation from './AboutAnimation'
const AboutMeParagraph = () => {

    const text = "Hello, my name is Dominick Simone. I am a Full Stack Developer from Lewisburg, PA. I graduated from the Full Stack Coding Bootcamp at the University of Pennsylvania in 2021. I am currently working as a Senior Learning Assistant for Full Stack Development Bootcamps at 2U. I am also looking for a full time software development positon!"


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
