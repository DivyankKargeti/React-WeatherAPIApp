import React, { useState, useEffect } from 'react';
import "./css/style.css";

const Cardcomp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log(response);
            setCity(resjson.main);
        };

        fetchApi();
    }, [search])


    return (
        <div className="main_header">

            <div className="row">
                <div className="col-md-10 col-12 mx-auto">

                    <div className="container-fluid  main_content">

                        <form className="temp_form">

                            <input
                                type="search"
                                id="cityName"
                                value={search}
                                placeholder="Enter Your City..."
                                autocomplete="off"
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                }}
                            />
                            <br />
                            <input type="submit" value="Reload"/>
                        </form>

                        {/*Ternary Operator used for Conditional Rendering */}
                        {!city ? (
                            <div>
                                <div className="tempInformation  ">
                                    <div className="main_layer ">
                                        <p id="city_name">No Data Found</p>
                                        <div className="middle_layer data_hide">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                                <div>
                                    <div className="tempInformation  ">
                                        <div className="main_layer ">
                                            <p id="city_name">{search}</p>
                                            <div className="middle_layer">
                                                <p id="temp"><span id="temp_real_val">{city.temp}</span><sup>o</sup>C</p>
                                                <p id="temp_status"><i className="fa fa-cloud" aria-hidden="true"></i></p>            
                                            </div>
                                            <p id="otherdetails">Min Temp: {city.temp_min}</p>
                                            <p id="otherdetails">Max Temp: {city.temp_max}</p>
                                            <p id="otherdetails">Humidity: {city.humidity}</p>
                                            <p id="otherdetails">Pressure: {city.pressure}</p>
                                            <p id="otherdetails">Ground Level: {city.grnd_level}</p>
                                            <p id="otherdetails">Sea Level: {city.sea_level}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cardcomp;
