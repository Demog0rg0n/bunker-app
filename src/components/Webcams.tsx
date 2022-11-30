import React from 'react'

import '../styles/webcams.css'

import Camera from './Camera'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/storage'

import EmptyCamera from './EmptyCamera'

const Webcams: React.FC = () => {

  const players = useSelector((state: RootState) => state.Players.players)

  return (
    <div className="webcams">
      { 
        players.map((player, index: number) => (
          player !== null?
          <Camera key={ index + 1 }  {...player} />:
          <EmptyCamera key={ index + 1 }/>
        ))
      }
    </div>
  )
  
  
}

export default Webcams