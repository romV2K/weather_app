import { weather } from "../api/api";

const SET_WEATHER = 'SET_WEATHER'
const SET_SEARCH = 'SET_SEARCH'

const initial_state = {
     weather: {

     },
     loaded: false,
     search: 'Lviv'
}

const weatherReducer = (state = initial_state, action) => {

     switch (action.type) {

          case SET_WEATHER:
               return { ...state, weather: action.weather, loaded: true }
          case SET_SEARCH:
               return { ...state, search: action.value }

          default:
               return state;
     }
}

export default weatherReducer

export const setWeather = (weather) => ({ type: SET_WEATHER, weather })
export const setSearch = (value) => ({ type: SET_SEARCH, value })

export const requestWeather = (city) => {
     return dispatch => {
          weather.getWeather(city)
               .then(data => {
                    dispatch(setWeather(data))
               })
     }
}

