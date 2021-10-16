import Navigation from "./Navigation"
import "../styles/header.css"
const Header = ({handlePageChange}) => {
    return (
        <header>
            <h1>Dominick Simone</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header
