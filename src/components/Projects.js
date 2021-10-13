const Projects = () => {
    return (
        <div style={project}>
            <div style={projectDiv}>
                <h1 style={projectTitle}>NFL Bets</h1>
                <a href="https://vast-eyrie-51403.herokuapp.com/" target="_blank">
                    <img src="/images/NFL-Bets.png" style={projectImage} alt="NFL Bets" />
                </a>
                <p style={projectText}>Text about project</p>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Weather App</h1>
                <a href="https://dominick-simone.github.io/Weather-App/" target="_blank">
                    <img src="/images/Weather-App.png" style={projectImage} alt="NFL Bets" />
                </a>
                <p style={projectText}>Text about project</p>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Note Taker</h1>
                <a href="https://thawing-coast-14961.herokuapp.com/" target="_blank">
                    <img src="/images/Note-Taker.png" style={projectImage} alt="NFL Bets" />
                </a>
                <p style={projectText}>Text about project</p>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Password Generator</h1>
                <a href="https://dominick-simone.github.io/PasswordGen/" target="_blank">
                    <img style={projectImage} src="/images/Password-Generator.png" alt="Password Generator" />
                </a>
                <p style={projectText}>Text about project</p>
            </div>
        </div>
    )
}
const projectDiv = {
    height: "40%",
    width: "40%",
    margin: "4.5%",
}
const project = {
    display: "flex",
    backgroundColor: "#001f3f",
    flexDirection: "row",
    flexWrap: "wrap"
}
const projectTitle = {
    color: "steelblue",
}
const projectText = {
    color: "steelblue",
}
const projectImage = {
    width: "100%",
    color: "steelblue",
}
export default Projects
