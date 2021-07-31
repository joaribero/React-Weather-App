import React,{useState} from 'react';
import Error from '../components/Error.jsx'
import PropTypes from 'prop-types';

const Form = ({search,setSearch,setRequest,result,setLastResults,lastResults}) => {
    
    //state
    const [error,setError] = useState(false);
    
    // extract city and country
    const {city,country} = search;

    //func for insert elements into the state
    const handleChange = e => {
        //update the state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    //when user submits the form
    const handleSubmit = e => {
        e.preventDefault();

        //validate
        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        
        //transfer to the main component
        setRequest(true);
        if (result)  {
            setLastResults(lastResults => [...lastResults,result]);
        }
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            
            {error? <Error message="All fields are required"/> : null}

            <div className="input-field col s12">
                <input type="text" name="city" id="city" value={city}  onChange={handleChange}/>
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select name="country" id="country" value={country} onChange={handleChange}>
                    <option value="">-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>

            <div className="input-field col s12">
                <button 
                    type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    >Search weather</button>
            </div>
        </form>
     );
};

//Document props
Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
};
 
export default Form;