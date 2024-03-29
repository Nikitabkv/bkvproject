import s from "../../Search/ui/Search.module.scss"
import {flag} from "country-emoji"
import {FC} from "react";
import {Link} from "react-router-dom";

interface City {
  name: string
  admin1: string
  id: number
  country_code: string
  latitude: number
  longitude: number
  timezone: string
}

interface SearchedListProps {
  foundCities: City[];
}

export const SearchedList:FC<SearchedListProps> = ({foundCities}) => {
  return (
    <>
      {foundCities.length > 0 && (
        <div className={s.foundCitiesWrapper}>
          {foundCities && foundCities.map((city: City, index) => (
            city.admin1 && city.name && city.country_code ?
              (
                <Link to={'/city/?city=' + city.name} state={city.name}>
                <div key={city.id}>
                  <h3>
                    {`${index+1}. ${city.name}`}
                  </h3>
                  <span className={s.region}>
                {`${city.admin1} ${city.admin1 === 'Автономная Республика Крым' ? flag('RU') : flag(city.country_code)}`}
                </span>
                  <span>
                  Дата и время: {new Date().toLocaleString("ru-RU", {timeZone: city.timezone})}
                </span>
                </div>
                </Link>
              ) : ''
          ))}
        </div>
      )}
    </>
  )
}
