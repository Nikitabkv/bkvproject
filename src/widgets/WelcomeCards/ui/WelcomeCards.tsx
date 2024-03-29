import WeatherSmallCard from "../../../feauteres/WeatherSmallCard"
import s from './WelcomeCards.module.scss'

const cities = [
  'Москва',
  'Токио',
  'Нью-Йорк',
  'Париж',
  'Воронеж',
  'Лондон'
]
export const WelcomeCards = () => {

  return (
    <div className={s.welcomeCardsWrapper}>
      {cities.map(city => <WeatherSmallCard city={city} key={city}/>)}
    </div>
  )
}