import s from "./FutureWeatherCard.module.scss"
import {FC} from "react"
import weatherIcons from "../../../shared/weatherIcons"
import {waterDropsDual} from "../../../shared/icons"

interface FutureWeatherCardProps {
  data: {
    dt_txt: string
    main: {
      temp: number
      feels_like: number
      pressure: number
      humidity: number
    }
    weather: [
      {
        description: string
        icon: string
      }
    ]
  }
}

export const FutureWeatherCard:FC<FutureWeatherCardProps> = ({data}) => {


  return (
    <div className={s.futureWeatherWrapper}>
      <div className={s.firstColumn}>
        <img
          width={40}
          src={weatherIcons[data.weather[0].icon]}
          alt={data.weather[0].description}
        />
        {data.dt_txt.slice(11, 16)}
      </div>
      <div className={s.secondColumn}>
        <span className={s.temp}>
          {Math.round(data.main.temp)} °C
        </span>
        <div className={s.humidity}>
          <img
            width={25}
            src={waterDropsDual}
          />
          <span>{data.main.humidity} %</span>
        </div>
      </div>
    </div>
  )
}