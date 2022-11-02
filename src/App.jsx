import { nanoid } from "nanoid"
import Article from "./components/Article"
import Header from "./components/Header"
import data from "../data.js"

function App() {
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
        <>
            <Header />
            <div className="articles-container">{articles}</div>
        </>
    )
}

export default App
