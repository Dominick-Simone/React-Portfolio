import Navigation from "./Navigation"

const Header = ({handlePageChange}) => {
    return (
        <header style={headerStyles}>
            <h1 style={headerTitle}>Dominick Simone</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    )
}
const headerStyles = {
    textAlign: "center",
    backgroundColor: "steelblue",
    height: "100px",
}
const headerTitle = {
    paddingTop: "10px",
    color: "#001f3f"
}
export default Header
