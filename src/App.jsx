import { useState } from "react"
import Article from "./components/Article"
import Header from "./components/Header"

function App() {
    return (
        <>
            <Header />
            <div className="articles-container">
                <Article />
            </div>
        </>
    )
}

export default App
