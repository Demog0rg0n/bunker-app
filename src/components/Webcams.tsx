import React from 'react'
import Camera from './Camera'
import '../styles/webcams.css'

import { useSelector } from 'react-redux'
import ExiledPlayer from './ExiledPlayer'
import { RootState } from '../redux/storage'
import { InitialPlayer } from '../redux/supportingScripts'

const Webcams: React.FC = () => {
  const players = useSelector((state: RootState) => state.Cards.players)
  return (
    <div className="webcams">
      { 
        players.map((player: InitialPlayer, index: number) => (
          !player.isExiled?
          <Camera key={ index + 1 }  {...player} />:
          <ExiledPlayer />
        ))
      }
    </div>
  )
  
  
}

export default Webcams