import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main,weather} = result || {};

    if (!name) return null;

    console.log(result);

    const iconUrl = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
 
    return ( 
        <div className="card-panel blue darken-3 col s12">
            <div className="white-text">
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
     );
};

//Document props
Weather.propTypes = {
    result: PropTypes.object.isRequired
};

export default Weather;