import nflBetsIMG from '../images/NFL-Bets.png'
import weatherAppIMG from "../images/Weather-App.png"
import noteTakerIMG from "../images/Note-Taker.png"
import passwordGeneratorIMG from "../images/Password-Generator.png"
import "../styles/project.css"
const Projects = () => {
    return (
        <div className="project">
            <div className="projectDiv">
                <h1 className="projectTitle">NFL Bets</h1>
                <h2 className="projectTitle"><a href="https://github.com/Dominick-Simone/NFL_Bets" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://vast-eyrie-51403.herokuapp.com/" target="_blank">
                    <img src={nflBetsIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application uses an NFL API to get information about the NFL game schedule to allow users to choose to bet on whether a team will win or lose in the specified game. The user has to make an account, and then they can choose a favorite team and start betting. This application was created in NodeJS, it uses MySQL as the database, and ExpressJS for the server.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Weather App</h1>
                <h2 className="projectTitle"><a href="https://github.com/Dominick-Simone/Weather-App" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://dominick-simone.github.io/Weather-App/" target="_blank">
                    <img src={weatherAppIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application uses a Weather API to generate the cities weather details, and five day forecast based on the city that the user searches.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Note Taker</h1>
                <h2 className="projectTitle"><a href="https://github.com/Dominick-Simone/Note-Taker" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://thawing-coast-14961.herokuapp.com/" target="_blank">
                    <img src={noteTakerIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <h3 className="projectText">This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Password Generator</h1>
                <h2 className="projectTitle"><a href="https://github.com/Dominick-Simone/h3asswordGen" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://dominick-simone.github.io/PasswordGen/" target="_blank">
                    <img className="projectImage" src={passwordGeneratorIMG} alt="Password Generator" />
                </a>
                <h3 className="projectText">This application prompts users asking which types of characters they would like the password to contain, as well as the length they would like to have their password. After the user chooses their options the password is generated into the text box in the middle of the page.</h3>
            </div>
        </div>
    )
}

export default Projects
