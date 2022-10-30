import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removePlayer } from '../../redux/slices/playerSlice'
import { RootState } from '../../redux/storage'
import { changeFeature } from '../../redux/slices/playerSlice'

const PlayerCardSettings: React.FC = () => {
  const [id, setId] = React.useState(1)
  const card = useSelector((state: RootState) => state.Players.players)[id - 1]
  const dispatch = useDispatch()
  const socket = React.useRef<WebSocket>()

  socket.current = new WebSocket("ws://localhost:5001")

  function sendVote(id: number, vote: string) {
    const message = {
      event: "voting",
      data: {
        value: vote, id,
      }
    }
    socket.current?.send(JSON.stringify(message))
  }

  function voting(id: number, key: string, value: string){
    if(key === "Enter"){
      sendVote(id, value)
    }
  }

  return (
    <div className="player-card">
        <h1 className="player-card__title">Настройки карточек</h1>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Профессия</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.profession.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "profession"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Здоровье</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.health.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "health"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Хобби</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.hobby.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "hobby"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Фобия</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.phobia.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "phobia"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Факт 1</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.fact1.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "fact1"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <h4>Факт 2</h4>
            <input onChange={(event) => alert(event.target.value)} type="text" value={ card === null? "?????????": card.fact2.value } />  
          </div>
          { card !== null && <img onClick = {() => {dispatch(changeFeature({id, feature: "fact2"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' /> }
        </div>

        <div className="player-card__midle">
          <div className="vote">
            <h4>Голос</h4>
            <input onKeyDown = {(event) => voting(id, event.code, event.currentTarget.value)} type="text" />
          </div>
          <button onClick={() => dispatch(removePlayer(id))} className='settings__button'>Выгнать</button>
        </div>

        <div className="player-card__bottom">
          <img 
            src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/arrow-left-interface-512.png" alt=""
            onClick={() => id > 1 && setId(id - 1)} 
          />
          <h4>{id}</h4>
          <img 
            src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/arrow-right-interface-256.png" alt=""
            onClick={() => id < 12 && setId(id + 1)} 
          />
        </div>
      </div>
  )
}

export default PlayerCardSettings