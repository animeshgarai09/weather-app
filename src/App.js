import { useEffect, useState } from "react";
import WeatherWidget from "./components/weather/weather-widget";
import Spinner from "./components/spinner/spinner"

function App() {
    const [coords, setCoords] = useState(false)

    useEffect(() => {
        // Checking if navigator API is supported
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((loc) => {
                setCoords({
                    lat: loc.coords.latitude,
                    lon: loc.coords.longitude
                })
            })
        } else {
            setCoords({
                lat: '27.391277',
                lon: '73.432617'
            })
        }
    }, [])

    return (
        <div className="App">
            {
                coords ?
                    <WeatherWidget coords={coords} />
                    : <Spinner />
            }
        </div>
    );
}

export default App;
