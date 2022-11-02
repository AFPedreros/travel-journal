export default function Article(props) {
    return (
        <article>
            <div className="img-container">
                <img className="article-img" src={props.img}></img>
            </div>
            <div className="info-container">
                <h4>
                    <i class="fa-solid fa-location-dot"></i>
                    {props.country} <a href="">View on Google Maps</a>
                </h4>
                <h2>{props.name}</h2>
                <p className="date">{props.date}</p>
                <p className="info">{props.text}</p>
            </div>
        </article>
    )
}
