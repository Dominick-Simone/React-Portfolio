const AboutMe = () => {
    return (
        <div style={aboutComponent}>
            <div style={about}>
                <div style={aboutBorder} >
                    <h1 style={aboutTitle}>Technologies</h1>
                    <div style={aboutTextDiv}>
                        <h2 style={aboutText}>ReactJS</h2>
                        <h2 style={aboutText}>NodeJS</h2>
                        <h2 style={aboutText}>ExpressJS</h2>
                        <h2 style={aboutText}>MySQL</h2>
                        <h2 style={aboutText}>MongoDB</h2>
                        <h2 style={aboutText}>IndexedDB</h2>
                        <h2 style={aboutText}>Spring Boot</h2>
                    </div>
                </div>
                <div style={aboutBorder}>
                    <h1 style={aboutTitle}>Languages</h1>
                    <div style={aboutTextDiv}>
                        <h2 style={aboutText}>HTML</h2>
                        <h2 style={aboutText}>CSS</h2>
                        <h2 style={aboutText}>JavaScript</h2>
                        <h2 style={aboutText}>Java</h2>
                    </div>
                </div>
                <div style={aboutBorder}>
                    <h1 style={aboutTitle}>Tools</h1>
                    <div style={aboutTextDiv}>
                        <h2 style={aboutText}>Github</h2>
                        <h2 style={aboutText}>Git Bash</h2>
                        <h2 style={aboutText}>JQuery</h2>
                        <h2 style={aboutText}>VS Code</h2>
                        <h2 style={aboutText}>Bootstrap</h2>
                        <h2 style={aboutText}>Materialize</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
// needs media query to switch to column instead of row once i figure out how to use the css file with react
const about = {
    display: "flex",
    backgroundColor: "#001f3f",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "25px",
    width: "clamp(100px, 50%, 50%)"
}
const aboutTitle = {
    textAlign: "center",
    color: "steelblue",
    padding: "8px"
}
const aboutBorder = {
    flex: "1",
    border: "2px solid steelblue"
}
const aboutText = {
    color: "steelblue",
    margin: "10px"
}
const aboutTextDiv = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}
const aboutComponent = {
    backgroundColor: "#001f3f",
    display: "flex",
    justifyContent: "center"
}

export default AboutMe
