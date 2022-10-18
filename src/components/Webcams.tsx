import React from 'react'
import Camera from './Camera'
import '../styles/webcams.css'

import { useSelector } from 'react-redux'
import ExiledPlayer from './ExiledPlayer'
import { RootState } from '../redux/storage'

const Webcams: React.FC = () => {
  const players = useSelector((state: RootState) => state.Players.players)
  return (
    <div className="webcams">
      { 
        players.map((player, index: number) => (
          !player.isExiled?
          <Camera key={ index + 1 }  {...player} />:
          <ExiledPlayer />
        ))
      }
    </div>
  )
  
  
}

export default Webcams