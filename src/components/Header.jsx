// Icons for React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <header>
            <FontAwesomeIcon icon={faEarthAmericas} size="2xl" />
            <h1>My travel journal</h1>
        </header>
    )
}
