import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removePlayer, setCard, ShowFeatureType } from '../../redux/slices/playerSlice'
import { RootState } from '../../redux/storage'
import { changeFeature } from '../../redux/slices/playerSlice'
import { Player } from '../../redux/supportingScripts'

import { sendVote } from '../../websocketControllers'

const PlayerCardSettings: React.FC = () => {

  const playerCardElems = [
    {title: "Профессия", value: "profession"},
    {title: "Здоровье", value: "health"},
    {title: "Хобби", value: "hobby"},
    {title: "Фобия", value: "phobia"},
    {title: "Факт 1", value: "fact1"},
    {title: "Факт 2", value: "fact2"},
  ]

  const [id, setId] = React.useState(1)
  const card = useSelector((state: RootState) => state.Players.players)[id - 1]

  const dispatch = useDispatch()

  const socket = React.useRef<WebSocket>()

  React.useEffect(() => {

    socket.current = new WebSocket("wss://steel-hot-rhinoceros.glitch.me")

    socket.current.onmessage = (message) => {
      const newMessage: { event: string, data: Player } = JSON.parse(message.data)
      switch(newMessage.event) {
        case "generate-card":
          dispatch(setCard(newMessage.data))
          break;
      }
    }

    socket.current.onopen = () => {
      console.log("Подключено")
    }

  }, [])

  function voting(id: number, key: string, value: string){
    if(key === "Enter"){
      sendVote(id, value, socket.current)
    }
  }

  return (
    <div className="player-card">
        <h1 className="player-card__title">Настройки карточек</h1>
        {
          playerCardElems.map(playerCardElem => (
            <div key={playerCardElem.value} className="player-card__elem">
              <div className="player-card__elem__left">
                <h4>{playerCardElem.title}</h4>
                <input onChange={() => {}} type="text" value={ card === null || card === undefined? "?????????": card[playerCardElem.value as keyof ShowFeatureType].value } />  
              </div>
              { card && <img onClick = {() => {dispatch(changeFeature({id, feature: "profession"}))}} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />}
            </div>
          ))
        }

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