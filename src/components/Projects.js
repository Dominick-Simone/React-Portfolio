const Projects = () => {
    return (
        <div style={project}>
            <div style={projectDiv}>
                <h1 style={projectTitle}>NFL Bets</h1>
                <h2 style={projectTitle}><a href="https://github.com/Dominick-Simone/NFL_Bets" style={linkStyles} target="_blank">Github</a></h2>
                <a href="https://vast-eyrie-51403.herokuapp.com/" target="_blank">
                    <img src="/images/NFL-Bets.png" style={projectImage} alt="NFL Bets" />
                </a>
                <h3 style={projectText}>This application uses an NFL API to get information about the NFL game schedule to allow users to choose to bet on whether a team will win or lose in the specified game. The user has to make an account, and then they can choose a favorite team and start betting. This application was created in NodeJS, it uses MySQL as the database, and ExpressJS for the server.</h3>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Weather App</h1>
                <h2 style={projectTitle}><a href="https://github.com/Dominick-Simone/Weather-App" style={linkStyles} target="_blank">Github</a></h2>
                <a href="https://dominick-simone.github.io/Weather-App/" target="_blank">
                    <img src="/images/Weather-App.png" style={projectImage} alt="NFL Bets" />
                </a>
                <h3 style={projectText}>This application uses a Weather API to generate the cities weather details, and five day forecast based on the city that the user searches.</h3>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Note Taker</h1>
                <h2 style={projectTitle}><a href="https://github.com/Dominick-Simone/Note-Taker" style={linkStyles} target="_blank">Github</a></h2>
                <a href="https://thawing-coast-14961.herokuapp.com/" target="_blank">
                    <img src="/images/Note-Taker.png" style={projectImage} alt="NFL Bets" />
                </a>
                <h3 style={projectText}>This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.</h3>
            </div>
            <div style={projectDiv}>
                <h1 style={projectTitle}>Password Generator</h1>
                <h2 style={projectTitle}><a href="https://github.com/Dominick-Simone/h3asswordGen" style={linkStyles} target="_blank">Github</a></h2>
                <a href="https://dominick-simone.github.io/PasswordGen/" target="_blank">
                    <img style={projectImage} src="/images/Password-Generator.png" alt="Password Generator" />
                </a>
                <h3 style={projectText}>This application prompts users asking which types of characters they would like the password to contain, as well as the length they would like to have their password. After the user chooses their options the password is generated into the text box in the middle of the page.</h3>
            </div>
        </div>
    )
}

const projectDiv = {
    height: "40%",
    width: "clamp(275px, 40%, 40%)",
    margin: "4.5%",
}

// add media query to set flexDirection column on medium devices to remove white-space at the bottom
const project = {
    display: "flex",
    backgroundColor: "#001f3f",
    justifyContent: "center",
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

const linkStyles = {
    textDecoration: "none",
    color: "steelblue"
  }
export default Projects
