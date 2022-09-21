import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../styles/header.css'

const Header = () => {
  const { bunker, disaster } = useSelector(state => state.Header)
  return (
    <header className="header">
        <Link to={"/"} className="header__tittle">БУНКЕР</Link>
        <div className="disaster">Катастрофа: { disaster }</div>
        <div className="bunker">Бункер: <br />{ bunker }</div>
    </header>
  )
}

export default Header