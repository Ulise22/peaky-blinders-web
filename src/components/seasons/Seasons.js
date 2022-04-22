import React, { useState } from "react";
import Season from "./Season";
import { season1, season2, season3, season4, season5} from './data'
import './Seasons.css';

const Seasons = () => {
    const [activeSeason, setActiveSeason] = useState(1);

    const viewSeason = () => {
        if (activeSeason === 1) {
            return(<Season props={season1} />)
        } else if (activeSeason === 2) {
            return(<Season props={season2} />)
        } else if (activeSeason === 3) {
            return(<Season props={season3} />)
        } else if (activeSeason === 4) {
            return(<Season props={season4} />)
        } else if (activeSeason === 5) {
            return(<Season props={season5} />)
        }
    }

    const change1 = () => setActiveSeason(1);
    const change2 = () => setActiveSeason(2);
    const change3 = () => setActiveSeason(3);
    const change4 = () => setActiveSeason(4);
    const change5 = () => setActiveSeason(5);

    return(
        <div name="seasons" className="seasons">
            <div className="container seasons__container">
                <h2 className="seasons__title">Series</h2>
                <p className="seasons__text">You can watch it on Netflix!</p>

                <div className="seasons__btns">
                    <button className="seasons__btns__btn" onClick={change1}>Season 1</button>
                    <button className="seasons__btns__btn" onClick={change2}>Season 2</button>
                    <button className="seasons__btns__btn" onClick={change3}>Season 3</button>
                    <button className="seasons__btns__btn" onClick={change4}>Season 4</button>
                    <button className="seasons__btns__btn" onClick={change5}>Season 5</button>
                </div>

                { viewSeason() }
            </div>
        </div>
    )
}

export default Seasons;