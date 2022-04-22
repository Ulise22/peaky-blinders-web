import React from "react";
import './Season.css'

const Season = (props) => {
    return(
        <div className="season">
            <div className="season__texts">
                <h2 className="season__texts__title"> {props.props.se} ({props.props.year}) </h2>
                <p className="season__texts__ep"> {props.props.ep1} </p>
                <p className="season__texts__ep"> {props.props.ep2} </p>
                <p className="season__texts__ep"> {props.props.ep3} </p>
                <p className="season__texts__ep"> {props.props.ep4} </p>
                <p className="season__texts__ep"> {props.props.ep5} </p>
                <p className="season__texts__ep"> {props.props.ep6} </p>
            </div>

            <div className="seasons__image">
                <img src={ props.props.image } alt="" className="season__img" />
            </div>
        </div>
    )
}

export default Season;