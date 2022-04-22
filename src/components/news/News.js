import React from "react";
import './News.css';

const News = () => {
    return(
        <div name="news" className="news">
            <div className="container news__container">
                <h1 className="news__title">NEWS</h1>
                <iframe className="news__video" src="https://www.youtube.com/embed/2nsT9uQPIrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <p className="news__text">There is a date for the new season! available from June 10.</p>
            </div>
        </div>
    )
}

export default News;