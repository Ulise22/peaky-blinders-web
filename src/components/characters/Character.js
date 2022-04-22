import React from "react";
import Tommy from './Tommy';
import Arthur from './Arthur';
import John from './John';
import './Character.css';

const Character = () => {
    return(
        <div name="character" className="character">
            <h1 className="character__title">Characters</h1>
            <Tommy />
            <Arthur />
            <John />
        </div>
    )
}

export default Character;