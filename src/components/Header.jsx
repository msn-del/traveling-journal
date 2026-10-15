import world from "../images/world.png" 
export default function Header() {
    return (
        <header>
            <img src={world} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}