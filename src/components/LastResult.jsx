import React from 'react';

const LastResults = ({lastResult}) => {

    const {name, main,weather,sys} = lastResult || {};

    if (!name) return null;

    const iconUrl = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";

    return ( 
        <div>
            <div className="card-panel white darken-3 col s12">
                <div className="block">
                    <span className="blue-text text-darken-3 country">{sys.country}</span>
                </div>
                <div className="blue-text text-darken-3">
                    <h2>{name}'s climate is: </h2>
                    <p className="temperatura">
                        {main.temp} <span>&#x2103;</span>
                    </p>
                    <div className="icon-img">
                        <img src={iconUrl} alt="" className="imgW" title={weather[0].description}/>
                        <p>{weather[0].main}</p>
                    </div>
                    <p> Max temp:
                        {main.temp_max} <span>&#x2103;</span>
                    </p>
                    <p> Min temp:
                        {main.temp_min} <span>&#x2103;</span>
                    </p>
                </div>
            </div>
        </div>     
     );
}
 
export default LastResults;