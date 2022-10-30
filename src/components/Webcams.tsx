import React from 'react'
import Camera from './Camera'
import '../styles/webcams.css'

import { useSelector } from 'react-redux'
import ExiledPlayer from './ExiledPlayer'
import { RootState } from '../redux/storage'
import EmptyCamera from './EmptyCamera'

const Webcams: React.FC = () => {
  const players = useSelector((state: RootState) => state.Players.players)
  return (
    <div className="webcams">
      { 
        players.map((player, index: number) => (
          player?
          !player.isExiled?
          <Camera key={ index + 1 }  {...player} />:
          <ExiledPlayer key={ index + 1 }/>:
          <EmptyCamera key={ index + 1 }/>
        ))
      }
    </div>
  )
  
  
}

export default Webcams