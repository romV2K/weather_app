import * as axios from 'axios'

let instance = axios.create({
     baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=1e444b4ce81b417c846171148210811&'
})

export const weather = {
     getWeather: (city) => {
          return instance.get(`&q=${city}&days=1`).then(response => response.data)
     }
}

