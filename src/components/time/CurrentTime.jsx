const CurrentTime = () => {

     let currentdate = new Date()
     let datetime = `${currentdate.getHours()}:${currentdate.getMinutes()}`

     return (
          <div className="text-white text-center text-3xl mt-2">
               <p>
                    {datetime}
                    {currentdate.getHours() > 12 && currentdate.getMinutes() > 0 ? 'pm' : 'am'}
               </p>
          </div>
     )
}

export default CurrentTime