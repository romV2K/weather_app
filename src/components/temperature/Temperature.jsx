const Temperature = (props) => {

     let { temp, feels_like, wind } = props

     return (
          <div className='temperature text-white text-center text-5xl pl-2 mb-3'>
               <p>
                    {temp}˚
               </p>
               <p className='feelsLike text-sm'>
                    Feels like {feels_like}˚
               </p>
               <p className='feelsLike text-sm'>
                    Wind {wind} km/h
               </p>
          </div>
     )
}

export default Temperature
