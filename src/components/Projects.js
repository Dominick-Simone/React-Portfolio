import nflBetsIMG from '../images/NFL-Bets.png'
import weatherAppIMG from "../images/Weather-App.png"
import noteTakerIMG from "../images/Note-Taker.png"
import socializeIMG from "../images/Socialize.png"
import "../styles/project.css"
const Projects = () => {
    return (
        <div className="project">
            <div className="projectDiv">
                <div class="projectLinks">
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/Socialize" className="linkStyles" target="_blank">Github</a></h3>
                    <h1 className="projectTitle">Socialize</h1>
                    <h3 className="projectTitle"><a href="https://boiling-caverns-77911.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <div class="projectMobile">
                    <h1 className="projectTitle">Socialize</h1>
                </div>
                <a href="https://boiling-caverns-77911.herokuapp.com/" target="_blank">
                    <img className="projectImage" src={socializeIMG} alt="Password Generator" />
                </a>
                <div className="projectMobile">
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/Socialize" className="linkStyles" target="_blank">Github</a></h3>
                    <h3 className="projectTitle"><a href="https://boiling-caverns-77911.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <h3 className="projectText">This was my final project in my coding bootcamp that I decided to do solo instead of with a group. It is a social media app that uses ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.</h3>
            </div>
            <div className="projectDiv">
                <div class="projectLinks">
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/NFL_Bets" className="linkStyles" target="_blank">Github</a></h3>
                    <h1 className="projectTitle">NFL Bets</h1>
                    <h3 className="projectTitle"><a href="https://vast-eyrie-51403.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <div className='projectMobile'>
                    <h1 className="projectTitle">NFL Bets</h1>
                </div>

                <a href="https://vast-eyrie-51403.herokuapp.com/" target="_blank">
                    <img src={nflBetsIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <div className='projectMobile'>
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/NFL_Bets" className="linkStyles" target="_blank">Github</a></h3>
                    <h3 className="projectTitle"><a href="https://vast-eyrie-51403.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <h3 className="projectText">This application uses an NFL API to get information about the NFL game schedule to allow users to choose to bet on whether a team will win or lose in the specified game. The user has to make an account, and then they can choose a favorite team and start betting. This application was created in NodeJS, it uses MySQL as the database, and ExpressJS for the server.</h3>
            </div>
            <div className="projectDiv">
                <div class="projectLinks">
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/Weather-App" className="linkStyles" target="_blank">Github</a></h3>
                    <h1 className="projectTitle">Weather App</h1>
                    <h3 className="projectTitle"><a href="https://dominick-simone.github.io/Weather-App/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <div className='projectMobile'>
                    <h1 className="projectTitle">Weather App</h1>
                </div>
                <a href="https://dominick-simone.github.io/Weather-App/" target="_blank">
                    <img src={weatherAppIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <div className='projectMobile'>
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/NFL_Bets" className="linkStyles" target="_blank">Github</a></h3>
                    <h3 className="projectTitle"><a href="https://vast-eyrie-51403.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <h3 className="projectText">This application uses a Weather API to generate the cities weather details, and five day forecast based on the city that the user searches.</h3>
            </div>
            <div className="projectDiv">
                <div class="projectLinks">
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/Note-Taker" className="linkStyles" target="_blank">Github</a></h3>
                    <h1 className="projectTitle">Note Taker</h1>
                    <h3 className="projectTitle"><a href="https://thawing-coast-14961.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <div className='projectMobile'>
                    <h1 className="projectTitle">Note Taker</h1>
                </div>
                <a href="https://thawing-coast-14961.herokuapp.com/" target="_blank">
                    <img src={noteTakerIMG} className="projectImage" alt="NFL Bets" />
                </a>
                <div className='projectMobile'>
                    <h3 className="projectTitle projectLinks"><a href="https://github.com/Dominick-Simone/Note-Taker" className="linkStyles" target="_blank">Github</a></h3>
                    <h3 className="projectTitle"><a href="https://thawing-coast-14961.herokuapp.com/" className="linkStyles" target="_blank">Deployed</a></h3>
                </div>
                <h3 className="projectText">This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.</h3>
            </div>
        </div>
    )
}

export default Projects
