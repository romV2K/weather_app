const CurrentDate = (props) => {

     // wrote this class simply because I decided to give it a try
     class CurrentDate {
          constructor(date) {
               this.date = date
          }
          get day() {
               return this.date.toLocaleString('en-US', { weekday: 'long' })
          }
          get day_of_month() {
               return this.date.getDate()
          }
          get month() {
               return this.date.toLocaleString('en-US', { month: 'long' })
          }
     }

     let date = new CurrentDate(new Date())

     let [day, day_of_month, month] = [date.day, date.day_of_month, date.month]

     return (
          <div className="text-white text-center text-sm">
               <p>{day}, {day_of_month}th <span className="lowercase">{month}</span></p>
          </div>
     )
}

export default CurrentDate
