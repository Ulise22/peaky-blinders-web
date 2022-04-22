import React from "react";
import './Home.css';

const Home = () => {
    return(
        <div name="home" className="home">
            <div className="home__texts">
                <h1 className="home__texts__title">Our New Seasons is coming soon!</h1>
                <a href="https://www.youtube.com/watch?v=2nsT9uQPIrk&ab_channel=BBC" target="_blank" className="home__texts__btn">Watch trailer</a>
            </div>
        </div>
    )
}

export default Home;