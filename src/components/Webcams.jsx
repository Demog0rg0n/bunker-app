import React from 'react'
import Camera from './Camera'
import '../styles/webcams.css'

import { useSelector } from 'react-redux'
import ExiledPlayer from './ExiledPlayer'


const Webcams = () => {
  const players = useSelector(state => state.Cards.players)
  return (
    <div className="webcams">
      { 
        players.map((player, index) => (
          player?
          <Camera key={ index + 1 } {...player } index = {index} />:
          <ExiledPlayer />
        ))
      }
    </div>
  )
  
  
}

export default Webcams