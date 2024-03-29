import n01 from './n01.svg'
import n02 from './n02.svg'
import n03 from './n03.svg'
import n04 from './n04.svg'
import n09 from './n09.svg'
import n10 from './n10.svg'
import n11 from './n11.svg'
import n13 from './n13.svg'
import n50 from './n50.svg'
import d01 from './d01.svg'
import d02 from './d02.svg'
import d03 from './d03.svg'
import d04 from './d04.svg'
import d09 from './d09.svg'
import d10 from './d10.svg'
import d11 from './d11.svg'
import d13 from './d13.svg'
import d50 from './d50.svg'

type WeatherIcons = {
  [key: string]: string;
}

const weatherIcons : WeatherIcons = {
  "01n": n01,
  "02n": n02,
  "03n": n03,
  "04n": n04,
  "09n": n09,
  "10n": n10,
  "11n": n11,
  "13n": n13,
  "50n": n50,
  "01d": d01,
  "02d": d02,
  "03d": d03,
  "04d": d04,
  "09d": d09,
  "10d": d10,
  "11d": d11,
  "13d": d13,
  "50d": d50
}

export default weatherIcons
