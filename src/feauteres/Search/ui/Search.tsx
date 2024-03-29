import React, {FC, ReactNode, useCallback, useEffect, useState} from "react"
import s from './Search.module.scss'

interface SearchProps {
  children: ReactNode;
  setFoundCities:  React.Dispatch<React.SetStateAction<never[]>>
}

export const Search: FC<SearchProps> = ({ children, setFoundCities }) => {
  const [searchValue, setSearchValue] = useState('')

  const fetchCities = useCallback(async () => {
    if (searchValue.length <= 2) {
      setFoundCities([])
      return
    }

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}&count=9&language=ru`)
    const data = await response.json()

    setFoundCities(data.results || [])
  }, [searchValue])

  useEffect(() => {
    fetchCities();
  }, [fetchCities])

  return (
    <>
      <div className={s.inputWrapper}>
        <input
          list="search"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Введите город"
        />
        <button onClick={() => setSearchValue('')}>X</button>
      </div>
      {children}
    </>
  )
}
