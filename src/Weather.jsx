import React ,{useState}from "react";
import DateAndTime from "./DateAndTime";

const Weather=()=>{
    const [city,setCity]= useState("");
    const [search,setSearch]= useState("");
    const [icon , setIcon] = useState("");

    //<=====Function for weather API========>
     const fetchApi= async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd8184da268988bea575aff8abcbdf3b`
            const response = await fetch(url);
            const resjson= await response.json();
            setCity(resjson);
            
            //Fetching the weather desc. for icons
            let weatherMain= resjson.weather[0].main;

            //Creating icon classes object
            let weatherIcon={
                Thunderstorm:"wi wi-thunderstorm",
                Drizzle:"wi wi-sleet",
                Rain:"wi wi-storm-showers",
                Snow:"wi wi-snow",
                Atmosphere:"wi wi-fog",
                Clear:"wi wi-day-sunny",
                Clouds:"wi wi-day-fog"
              }
              

              //Matching the values of Weather Desc.
              if(weatherMain === "Thunderstorm"){
                  setIcon(weatherIcon.Thunderstorm);
              } else if(weatherMain === "Drizzle"){
                setIcon(weatherIcon.Drizzle);
             } else if(weatherMain === "Rain"){
                setIcon(weatherIcon.Rain);
            } else if(weatherMain === "Snow"){
                setIcon(weatherIcon.Snow);
            } else if(weatherMain === "Atmosphere"){
                setIcon(weatherIcon.Atmosphere);
            } else if(weatherMain === "Clear"){
                setIcon(weatherIcon.Clear);
            } else if(weatherMain === "Clouds"){
                setIcon(weatherIcon.Clouds);
            }
                 
        };

    return (
        <>
        <div className="container">
            <div className="box">
            <div className="inputData">
                <input type="search" 
                className="inputField"
                placeholder="search any city..."
                onChange={(e)=>{
                 setSearch(e.target.value);
                }
                }
                value={search}    
                />
                <button className="btn" onClick={()=>{
                    fetchApi();
                }}>Search</button>
            </div>
            
            {/* Using Ternary operator */}
            {!city.name ? (
            <p className="error">Enter City Name To Get Weather</p>
            ) : (
                <>
            <h5 className="head">
                <i className={icon}/>
               
            </h5>
            <div className="main">
                <h2 className="location"><i className="fas fa-location-arrow"></i> {search}</h2>
                <h1 className="temp">{city.main.temp}°Cel</h1>
                <h3 className="min_max">Feels Like : {city.main.feels_like}°Cel </h3>
                <h3 className="time"><DateAndTime/></h3>
            </div>
            <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div>
            </>
            )}
           
            </div>
        </div>
        </>
    );
};

export default Weather;