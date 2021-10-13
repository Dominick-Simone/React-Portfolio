import React from 'react'

const AboutMeParagraph = () => {
    return (
        <div style={aboutParaComponent}>
            <div style={aboutParaDiv}>
                <img style={aboutParaImg} src="/images/image0.jpg" />
                <h3 style={aboutParaText}>Hello, my name is Dominick Simone. I am a 19 year old Full Stack Developer from Lewisburg, PA. I graduated from the full stack coding bootcamp at the University of Pennsylvania powered by Trilogy on November 13th, 2021.</h3>
            </div>
        </div>
    )
}
const aboutParaComponent = {
    backgroundColor: "#001f3f",
}
const aboutParaText = {
    color: "steelblue",
    textAlign: "center",
}
const aboutParaDiv = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    paddingTop: "50px",
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
}
const aboutParaImg = {
    width: "200px",
    height: "275px"
}
export default AboutMeParagraph
