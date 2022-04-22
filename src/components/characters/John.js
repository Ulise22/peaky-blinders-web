import React from "react";
import john from './../images/john.jpeg';
import './John.css';

const John = () => {
    return(
        <div className="john">
            <div className="container john__container">
                <div className="john__image">
                    <img src={john} alt="john-Shelby" className="john__image__img" />
                </div>

                <div className="john__texts">
                    <h2 className="john__texts__subtitle">John Shelby</h2>
                    <p className="john__texts__p">John Michael Shelby (also Johnny and John Boy) was the third son of Arthur Shelby Sr, brother of Arthur, Thomas, Ada and Finn Shelby, as well as being the husband of Esme Shelby. John has seven children, two sons and two daughters with his deceased first wife Martha Shelby, and three children with Esme, whose genders are unknown. One of his daughters is called Katie Shelby, but his other children's names are unknown.</p>
                    <p className="john__texts__p">John was a high ranking member of the Peaky Blinders, as well as being a 1/3 shareholder of the Shelby Family business, Shelby Company Limited.</p>
                    <p className="john__texts__p">After the Peaky Blinders get mixed up with the Changretta Family, John receives the Black Hand (a death threat) from them, but is slow to react and misses a warning from Thomas, resulting in him being shot to death outside of his home by Italian assassins.</p>
                </div>
            </div>
        </div>
    )
}

export default John;