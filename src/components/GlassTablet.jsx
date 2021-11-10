import CurrentDate from './date/CurrentDate'
import ForecastItem from './forecast/ForecastItem'
import s from './GlassTablet.module.css'
import Temperature from './temperature/Temperature'
import CurrentTime from './time/CurrentTime'

const GlassTablet = (props) => {

     const { temp, feels_like, text, country, city, wind_speed, icon } = props.weather

     // const { temp_forecast, time_forecast, icon_forecast  } = props.forecast

     const forecast = props.forecast.map((e,i) => <ForecastItem key={i} time={e.time} icon={e.icon} temp={e.temp}/>)

     return (
          <div className={s.glassTablet}>
               <CurrentDate />
               <CurrentTime />
               <div className='location text-white text-center text-sm mt-3'>
                    <p>
                         {city}, {country}
                    </p>
               </div>

               <div className={`${s.wheatherIcon} flex justify-center items-center flex-col `}>
                    <img src={icon} alt='----' />
                    <p className='description text-sm'>
                         {text}
                    </p>
               </div>
               <Temperature temp={temp} feels_like={feels_like} text={text} wind={wind_speed} />
               <hr className="mt-1 mb-1" />
               <div className = {`${s.forecastContainer}`}>
                    {forecast}
               </div>
          </div>
     )
}

export default GlassTablet
