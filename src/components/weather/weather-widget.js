import { useWeatherBit } from 'react-open-weather';
import styles from "./weather-widget.module.scss"
import Spinner from "../spinner/spinner"

const WeatherWidget = ({ coords }) => {

    // Fetching weather data from Weather Bit API with the coordinates passed from the parent
    const { data, isLoading, errorMessage } = useWeatherBit({
        key: process.env.REACT_APP_WEATHER_API_KEY,
        ...coords
    });

    const ForecastCard = ({ info }) => {
        return (
            <div className={styles.card}>
                <span className={styles.date}>{info?.date}</span>
                <svg width="38" height="45" viewBox="0 0 38 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d={info?.icon} />
                </svg>
                <span className={styles.temp}>{info?.temperature.max}/{info?.temperature.min} °C</span>
                <span className={styles.description}>{info?.description}</span>
            </div>
        )
    }

    return (
        <>
            {
                isLoading
                    ? <Spinner />
                    : <div className={styles.container}>
                        <div className={styles.info}>
                            <span className={styles.description}>{data?.current?.description}</span>
                            <span className={styles.date}>{data?.current?.date}</span>
                        </div>
                        <div className={styles.flex_box}>
                            <div className={styles.current_info}>
                                <div className={styles.flex_box}>
                                    <div className={styles.data}>
                                        <svg width="35" height="40" viewBox="0 0 35 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d={data?.current?.icon} />
                                        </svg>
                                        <span className={styles.temp}>{data?.current?.temperature?.current} <span>°C</span></span>
                                    </div>
                                    <div className={styles.other_data}>
                                        <span>Humidity: {data?.current?.humidity}%</span>
                                        <span>Wind: {data?.current?.wind} km/h</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.location}>
                                <h1>{data?.location}</h1>
                            </div>
                        </div>
                        <div className={styles.forecast_con}>
                            {
                                data?.forecast.slice(1).map((item, i) => {
                                    return <ForecastCard key={i} info={item} />
                                })
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default WeatherWidget