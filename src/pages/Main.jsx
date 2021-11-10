import s from './Main.module.css';
import GlassTablet from '../components/GlassTablet';
import { connect } from 'react-redux';
import { requestWeather, setSearch } from '../redux/weather-reducer'
import { useEffect } from 'react';
import Searchbar from '../components/searchbar/Searchbar';

const Main = (props) => {
     let forecast_day = props.weather.forecast?.forecastday[0].hour

     useEffect(() => {
          props.requestWeather(props.search)
     }, [props.search, props.loaded])

     let weather_items = {}
     let forecast_items = []

     if (props.loaded) {
          weather_items = {
               temp: props.weather.current.temp_c,
               feels_like: props.weather.current.feelslike_c,
               text: props.weather.current.condition.text,
               is_day: props.weather.current.is_day,
               country: props.weather.location.country,
               city: props.weather.location.name,
               wind_speed: props.weather.current.wind_kph,
               icon: props.weather.current.condition.icon
          }

          forecast_items = forecast_day?.map(e => {
               let time = new Date(e.time)
               return {
                    time: time.getHours(),
                    temp: e.temp_c,
                    icon: e.condition.icon
               }
          })
     }

     return (
          <div className={s.weatherContainer}>
               <Searchbar setSearch={props.setSearch}/>
               <GlassTablet weather={weather_items} forecast={forecast_items} />
          </div>
     )
}

let mapStateToProps = (state) => ({
     weather: state.weather.weather,
     loaded: state.weather.loaded,
     search: state.weather.search
})

export default connect(mapStateToProps, { requestWeather, setSearch })(Main)

