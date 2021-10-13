const Footer = () => {
    return (
        <footer style={footerStyles}>
            <a href="https://www.linkedin.com/in/dominick-simone-b6964b218/" target="_blank"><img style={imageStyle} src="/images/linkedin.png" /></a>
            <a href="https://github.com/Dominick-Simone" target="_blank"><img style={imageStyle} src="/images/github.png" /></a>
            <a href="mailto:domsimonedev@gmail.com"><img style={imageStyle} src="/images/email.png" /></a>
        </footer>
    )
}


const footerStyles = {
    height: "100px",
    backgroundColor: "#001f3f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const imageStyle = {
    padding: "0px 10px",
    width: "48px",
    height: "48px"
}



export default Footer
