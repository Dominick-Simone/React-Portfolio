import linkedInIMG from "../images/linkedin.png"
import githubIMG from "../images/github.png"
import emailIMG from "../images/email.png"
import "../styles/footer.css"


const Footer = () => {
    return (
        <footer id="contact">
            <h1 class="contactText">Contact Me</h1>
            <div className="footerStyles">
            <a href="https://www.linkedin.com/in/dominick-simone-b6964b218/" target="_blank"><img className="imageStyle" src={linkedInIMG} /></a>
            <a href="https://github.com/Dominick-Simone" target="_blank"><img className="imageStyle" src={githubIMG} /></a>
            <a href="mailto:domsimonedev@gmail.com"><img className="imageStyle" src={emailIMG} /></a>
            </div>
        </footer>
    )
}

export default Footer
