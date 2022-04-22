import React from "react";
import tommy from './../images/tommy.jpg';
import './Tommy.css';

const Tommy = () => {
    return(
        <div className="tommy">
            <div className="container tommy__container">
                <div className="tommy__image">
                    <img src={tommy} alt="tommy-Shelby" className="tommy__image__img" />
                </div>

                <div className="tommy__texts">
                    <h2 className="tommy__texts__subtitle">Tommy Shelby</h2>
                    <p className="tommy__texts__p">Thomas Michael "Tommy" Shelby OBE DCM MM MP is the son of Arthur and Mrs. Shelby, brother of Arthur, John, Ada and Finn Shelby, father of Charles and Ruby Shelby, as well as being the husband of Grace and Lizzie Shelby. He is the leader of the Birmingham criminal gang, the Peaky Blinders and the patriarch of the Shelby Family.</p>
                    <p className="tommy__texts__p">Thomas served in World War I with the rank of Sergeant Major and was decorated for bravery (Though he dumped them in a canal after returning from the war). His experiences in World War I left him disillusioned and beset with ongoing nightmares, and he becomes determined to move his family up in the world so that the powers who had always mistreated them could no longer touch them.</p>
                    <p className="tommy__texts__p">After the vendetta with the New York Mafia, and during the year of the Wall Street Crash, Thomas Shelby became a Member of Parliament as a member of the Labour Party, while lending the chair of the legal business to his older brother, Arthur Shelby.</p>
                </div>
            </div>
        </div>
    )
}

export default Tommy;