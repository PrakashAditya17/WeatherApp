export interface WeatherData_old {
    currentConditions: CurrentConditions
  }
  
  export interface CurrentConditions {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    snow: number
    snowdepth: number
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    uvindex: number
    conditions: string
    icon: string
  }
  