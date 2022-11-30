import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/storage'

import '../styles/header.css'

const Header: React.FC = () => {

  const { bunker, info, disaster } = useSelector((state: RootState) => state.Header)

  return (
    <header className="header">
      <Link to={"/"} className="logo">БУНКЕР</Link>

      <div className="disaster">{ disaster }</div>

      <ul className="info"> 
        {info?.map((element) => (
          <li key={element}>{ element }</li>
        ))}
      </ul>

      <ul className="bunker"> 
        {
          bunker? bunker?.map((element) => (
            <li key={element}>{ element }</li>
          )): "Бункер:"
        }
      </ul>

    </header>
  )
}

export default Header