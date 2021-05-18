import React,{Fragment, useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Weather from './components/Weather.jsx';
import Error from './components/Error.jsx';

function App() {
  
  //states
  const [search,setSearch] = useState({
    city:'',
    country:''
  });
  const [request,setRequest] = useState(false);
  const [result,setResult] = useState({});
  const [error, setError] = useState(false);
  

  const {city, country} = search;

  useEffect(() => {

    const requestAPI = async () => {

      if (request) {
        const appId = process.env['API_KEY'] || '62ce60d25ed127a877fe489b7c3263e9'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${appId}`

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        // set the request to false for new requests
        setRequest(false);

        //Detects if the request is valid.
        if(result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
           
    };
    requestAPI();
  },[request,city,country]); 

  let component;
  if (error) {
    component = <Error message="No results found."/>;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header 
        titulo = 'Weather React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setRequest={setRequest}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
