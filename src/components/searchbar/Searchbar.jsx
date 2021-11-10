import { useEffect, useRef, useState } from 'react'
import s from './Searchbar.module.css'
import search from '../../assets/images/search.svg'

const Searchbar = (props) => {

     const input = useRef(null)
     const button = useRef(null)

     let submmitAndClear = () => {
          props.setSearch(input.current.value)
          input.current.value = ''
     }

     let onKeydownHendler = (event) => {
          if (event.key === 'Enter') {
               submmitAndClear()
          }
     }

     let onClickHendler = (e) => {
          submmitAndClear()
     }

     return (
          <div className={`${s.searchbarContainer} mb-10`}>
               <input className={``} placeholder="Type to search..." ref={input} onKeyDown={onKeydownHendler} />
               <button className={`${s.search}`} onClick={onClickHendler} ref={button}>
                    <img src={search} alt="search" />
               </button>
          </div>
     )
}

export default Searchbar
