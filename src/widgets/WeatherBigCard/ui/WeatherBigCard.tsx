import s from "./WeatherBigCard.module.scss"
import {FC} from "react"
import {
  arrowDownDual,
  arrowUpDual,
  compassDual,
  pressureDual,
  waterDropsDual,
  sunriseDual,
  sunsetDual,
  eyeDual
} from "../../../shared/icons"
import weatherIcons from "../../../shared/weatherIcons";

interface WeatherBigCardProps {
  minTemp: number
  maxTemp: number
  data: {
    visibility: number
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    sys: {
      sunrise: number
      sunset: number
    }
    name: string
    country: string
    weather: [
      {
        description: string
        icon: string
      }
    ]
    wind: {
      speed: number
      deg: number
    }
    dt: number
  }
}

export const WeatherBigCard:FC<WeatherBigCardProps> = ({data, minTemp = 8, maxTemp = 13}) => {

  return (
    <div className={s.cardWrapper}>
      <h1>{data.name}</h1>
      <div className={s.temperatureWrapper}>
        <div className={s.temperature}>
          <span>
            {Math.round(data.main.temp)}
            <span>
            {` °C`}
            </span>
             <img
               width={60}
               src={weatherIcons[data.weather[0].icon]}
             />
          </span>
        </div>
        <span className={s.feelsLike}>Ощущается как {Math.round(data.main.feels_like)} °C</span>
      </div>
      <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 550}}>
        <div className={s.weatherInfoWrapper}>
          <div className={s.weatherIconsWrapper}>
            <img className={s.compass} style={{transform: `rotate(${data.wind.deg}deg)`}} src={compassDual}
                 alt="compass"/>
            <div className={s.windSpeed}>{data.wind.speed}<span>м/с</span></div>
          </div>
        </div>
        <div className={s.weatherInfoWrapper}>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.arrow}
              src={arrowUpDual}
              alt={'max'}
            />
            <span className={s.minMaxTemp}>
              {maxTemp}
              <span>°C</span>
          </span>
          </div>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.arrow}
              src={arrowDownDual}
              alt={'min'}
            />
            <span className={s.minMaxTemp}>
              {minTemp}
              <span>°C</span>
          </span>
          </div>
        </div>
        <div className={s.weatherInfoWrapper}>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.water}
              src={waterDropsDual}
              alt={'water'}
            />
            <span className={s.humidity}>
              {data.main.humidity}
              <span>%</span>
            </span>
          </div>
        </div>
        <div className={s.weatherInfoWrapper}>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.pressureIcon}
              src={pressureDual}
              alt={'water'}
            />
            <span className={s.pressure}>
              {Math.round(data.main.pressure * 0.7500637554192)}
              <span>мм рт. ст.</span>
            </span>
          </div>
        </div>
        <div className={s.weatherInfoWrapper}>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.pressureIcon}
              src={eyeDual}
              alt={'water'}
            />
            <span className={s.pressure}>
              {data.visibility / 1000}
              <span>{data.visibility === 10000 ? '+ км' : 'км'}</span>
            </span>
          </div>
        </div>
        <div className={s.weatherInfoWrapper} style={{justifyContent: 'space-around'}}>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.arrow}
              src={sunriseDual}
              alt={'sunrise'}
            />
            <span>
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
            </span>
          </div>
          <div>восход/закат</div>
          <div className={s.weatherIconsWrapper}>
            <img
              className={s.arrow}
              src={sunsetDual}
              alt={'sunset'}
            />
            <span>
              {new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
