import Search from "../../../feauteres/Search"
import SearchedList from "../../../feauteres/SearchedList"
import {useState} from "react";
import s from "./SearchWidget.module.scss"

export const SearchWidget = () => {
  const [foundCities, setFoundCities] = useState([])

  return (
    <div className={s.searchWrapper}>
      <Search setFoundCities={setFoundCities}>
        <SearchedList foundCities={foundCities}/>
      </Search>
    </div>
  )
}