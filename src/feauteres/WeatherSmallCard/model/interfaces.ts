export interface WeatherSmallCardProps {
  city: string
}

export interface WeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  cod?: number
  icon?: string
}
