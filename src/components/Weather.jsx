import React from 'react';

const Weather = ({result}) => {
    
    //extract the values
    /*if (result == null) {
        console.log("entro aca");
        return null;      
    }*/

    const {name, main} = result;

    if (!name) return null;
 
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}'s climate is: </h2>
                <p className="temperatura">
                    {main.temp} <span>&#x2103;</span>
                </p>
                <p> Max temp:
                    {main.temp_max} <span>&#x2103;</span>
                </p>
                <p> Min temp:
                    {main.temp_min} <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
export default Weather;