import React from 'react'
import { Link } from 'react-router-dom'
import PlayerIcon from '../components/PlayerIcon'

import '../styles/mainPage.css'

const MainPage = () => {
    return (
    <div className="main">
        <div className="game-table">
            <div className="game-table__top">
                <PlayerIcon id = "2" />
                <PlayerIcon id = "3" />
                <PlayerIcon id = "4" />
                <PlayerIcon id = "5" />  
                <PlayerIcon id = "6" />  
            </div>
            <div className="game-table__middle">
                <PlayerIcon id = "1" type = "player-left" />
                <Link className = "table" to={"/stream"}>Стрим</Link>
                <PlayerIcon id = "7" type = "player-right" />
            </div>
            <div className="game-table__bottom">
                <PlayerIcon id = "8" />
                <PlayerIcon id = "9" />
                <PlayerIcon id = "10" />
                <PlayerIcon id = "11" />  
                <PlayerIcon id = "12" />
            </div>
        </div>
        <Link to={"/settings"}><div className='settings-link'><img src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-74-256.png' alt='' /></div></Link>
    </div>
  )
}

export default MainPage