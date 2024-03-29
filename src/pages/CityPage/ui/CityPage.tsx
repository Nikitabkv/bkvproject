import s from './CityPage.module.scss'
import {FC, useEffect, useState} from "react"
import WeatherBigCard from "../../../widgets/WeatherBigCard"
import FutureWeatherWidget from "../../../widgets/FutureWeatherWidget"
import SearchWidget from "../../../widgets/SearchWidget";

interface CurrentDataProps {
  cod: number
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

interface DataProps {
  list?: {
    dt_txt: string
    main: {
      temp: number
      feels_like: number
      temp_max: number
      temp_min: number
      pressure: number
      humidity: number
    }
    weather: [
      {
        description: string
        icon: string
      }
    ]
    dt: number
  }[]
}

export const CityPage:FC = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const city = queryParams.get('city')
  console.log(city)
  const [currentData, setCurrentData] = useState<CurrentDataProps>({
    cod: 0,
    country: "",
    dt: 0,
    main: {feels_like: 0, humidity: 0, pressure: 0, temp: 0, temp_max: 0, temp_min: 0},
    name: "",
    sys: {sunrise: 0, sunset: 0},
    visibility: 0,
    weather: [{description: "", icon: ""}],
    wind: {deg: 0, speed: 0}
  })
  const [data, setData] = useState<DataProps>({})

  const getMaxTodayTemp = () => {
    if (!data.list) return 0
    const maxTempArr = data.list.map((el, index) => {
      if (index > 6) {
        return 0
      }
      return el.main.temp_max
    })
    return Math.max(...maxTempArr)
  }
  const getMinTodayTemp = () => {
    if (!data.list) return 0
    const minTempArr = data.list.map((el, index) => {
      if (index > 6) {
        return 10000
      }
      return el.main.temp_min
    })
    return Math.min(...minTempArr)
  }

  useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=9742168740627d63880bef54b4ba1e56`)
        .then(res => res.json())
        .then((res) => setCurrentData(res))
  }, [city]);

  useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=9742168740627d63880bef54b4ba1e56`)
        .then(res => res.json())
        .then((res) => setData(res))
  }, [city]);

  return (
    <>
      <div className={s.cityWrapper}>
        {currentData.cod !== 0 && <WeatherBigCard data={currentData} minTemp={getMinTodayTemp()} maxTemp={getMaxTodayTemp()}/>}
      </div>
      <div className={s.cityWrapper}>
        {
          data.list ? (
            <FutureWeatherWidget data={data.list}/>
          ) : 'Нет данных'
        }
      </div>
      <SearchWidget />
    </>
  )
}