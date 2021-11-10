const ForecastItem = (props) => {
     let { time, icon, temp } = props
     return (
          <div className={`flex-col flex items-center text-sm`} style={{ width: 'fit-content' }}>
               <span>{time}</span>
               <img src={icon} alt='' />
               <span>{temp}˚</span>
          </div>
     )
}

export default ForecastItem
