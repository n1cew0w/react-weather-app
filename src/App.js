import './App.css';
import axios from "axios";
import {useState} from "react";


function App() {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')


    //не трогайте appid пж =(
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=78ebb047c298b17ad01c977abd74de2e`

    // function searchLocation (event)  {
    //     if (event.key === 'Enter'){
    //          axios.get(url).then((response) =>{
    //             setData(response.data)
    //             console.log(response.data)
    //         })
    //         setLocation('')
    //     }
    //
    // }
    async function getLocation(event){
        if (event.key === 'Enter') {
            console.log(process.env.APP_ID)
            const response = await axios.get(url)
            setData(response.data)
            console.log(response.data)
            setLocation('')

        }

    }
    return (
        <div className="App">
            <div className="search">
                <input type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter location..' onKeyPress={getLocation}/>

            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()} F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main} </p> : null}
                        <p>Clouds</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like} F</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{data.wind.speed}  MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
