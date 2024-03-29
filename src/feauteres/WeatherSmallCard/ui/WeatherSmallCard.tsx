import s from "./WeatherSmallCard.module.scss"
import {FC, useEffect, useState} from "react"
import {WeatherData, WeatherSmallCardProps} from "../model/interfaces.ts"
import weatherIcons from "../../../shared/weatherIcons"
import {Link} from "react-router-dom";

export const WeatherSmallCard:FC<WeatherSmallCardProps> = ({city}) => {
  const [data, setData] = useState<WeatherData>({main: {temp: 0}, weather: [{description: "Ошибка зарузки", icon: ""}]});
  const [isLoad, setIsLoad] = useState(false)
  const description = data.weather[0].description
  const icon = data.weather[0].icon

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=9742168740627d63880bef54b4ba1e56`)
        .then(res => res.json())
        .then((res) => {
          res.cod === 200 && setData(res)
          setIsLoad(true)
        })
    }
  }, []);

  return (
      <div className={s.cardWrapper}>
        {
          !isLoad ?
            (<h1>Загрузка</h1>) :
            (
              <>
              <Link to={'/city/?city=' + city} state={''}>
                <h1 style={{textDecoration: data.cod !== 200 ? 'line-through' : 'none'}}>{city}</h1>
                <div className={s.currentWeather}>
                  <div className={s.textInfoWrapper}>
                    <span className={s.temperature}>{Math.round(data.main.temp)} °C</span>
                    <span className={s.description}>{description.replace(description[0], description[0].toUpperCase())}</span>
                  </div>
                  {
                    data.cod === 200 && (<img
                      className={s.icon}
                      src={weatherIcons[icon]}
                      // src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      alt={description.replace(description[0], description[0].toUpperCase())}
                    />)
                  }
                </div>
              </Link>
              </>
            )
        }
      </div>
  )
}