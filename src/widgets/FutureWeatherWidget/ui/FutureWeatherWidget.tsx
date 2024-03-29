import s from "./FutureWeatherWidget.module.scss"
import FutureWeatherCard from "../../../feauteres/FutureWeatherCard"
import {FC, useState} from "react"

interface FutureWeatherWidgetProps {
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
    dt: number
  }[]
}

export const FutureWeatherWidget:FC<FutureWeatherWidgetProps> = ({data}) => {
  const [slideOffset, setSlideOffset] = useState(0);

  const handleNextSlide = () => {
    if (slideOffset === -800 * (data.length/5) - 540) {
      return
    } else if (slideOffset < -800 * (data.length/5 - 1)) {
      setSlideOffset(- 6015);
      return
    }
    setSlideOffset(prevOffset => prevOffset - 308); // Сдвиг на 617px влево
  };

  const handlePrevSlide = () => {
    if (slideOffset >= 0 || slideOffset >= -617 ) {
      setSlideOffset(0)
      return
    }
    setSlideOffset(prevOffset => prevOffset + 308); // Сдвиг на 617px вправо
  };

  return (
    <>
      <div className={s.futureWeatherWidgetWrapper}>
        <button className={s.buttonNext} onClick={handlePrevSlide}>{'<'}</button>
        <div
          className={s.cardsCarousel}
          style={{transform: `translateX(${slideOffset}px)`}}
        >
          {data.map(el => <FutureWeatherCard data={el} key={el.dt}/>)}
        </div>
        <button className={s.buttonPrev} onClick={handleNextSlide}>{'>'}</button>
      </div>
    </>
  )
}