// Id generator for JavaScript
import { nanoid } from "nanoid"
// Components
import Article from "./components/Article"
import Header from "./components/Header"
// Articles data to display
import data from "../data.js"

export default function App() {
    // Passing the data for generate the article component
    const articles = data.map((article) => {
        return (
            <Article
                img={article.img}
                country={article.country.toUpperCase()}
                name={article.name}
                date={article.date}
                text={article.text}
                key={nanoid()}
            />
        )
    })

    return (
        <div>
            <Header />
            <div className="articles-container">{articles}</div>
        </div>
    )
}
