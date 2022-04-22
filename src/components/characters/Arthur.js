import React from "react";
import arthur from './../images/arthur.jpeg';
import './Arthur.css';

const Arthur = () => {
    return(
        <div className="arthur">
            <div className="container arthur__container">
                <div className="arthur__image">
                    <img src={arthur} alt="arthur-Shelby" className="arthur__image__img" />
                </div>

                <div className="arthur__texts">
                    <h2 className="arthur__texts__subtitle">Arthur Shelby</h2>
                    <p className="arthur__texts__p">Arthur Shelby is the eldest son of Arthur and Mrs Shelby, older brother of Thomas, John, Ada and Finn Shelby, as well as being the father of Billy Shelby. He was married to Linda Shelby, and is a tough member of the Peaky Blinders. He is also Deputy Vice President of Shelby Company Limited and member of the ICA, acting as his brother's right-hand man.</p>
                    <p className="arthur__texts__p">Arthur is a very complex character, he is very loyal to his family and has great remorse over his actions. He is also very quick to anger. He is though capable of very evil and brutal acts as when he had Billy Grade kill an innocent referee because he was gonna expose their corruption.</p>
                    <p className="arthur__texts__p">Arthur Shelby Jr. was born to a Romani and Irish Traveller family. Growing up, Arthur regularily wrestled with his siblings and was known as the strongest. He once got beaten by Tommy, he also once held off 12 police officers with a boat hook, showing that he let Tommy win. It is implied he had anger issues as a child and got into many fights. During the war in France, Arthur was a Sapper with his brother Thomas, digging very treacherous tunnels in order to place enormous amount of explosives under the enemy positions: a tactic used several times in the war to devastating effect at both the Battle of Verdun and the Battle of the Somme. It is suggested he may have served at Gallipoli through his distaste for Turks and the smell of stagnant water.</p>
                </div>
            </div>
        </div>
    )
}

export default Arthur;