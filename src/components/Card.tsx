import React from 'react'

import '../styles/card.css'

import { useDispatch } from 'react-redux'

import { getCam, getName, getVote, setMirrored, showFeature } from '../redux/slices/playerSlice'
import { Player } from '../redux/supportingScripts'
import { updateFeature } from '../websocketControllers'

const Card: React.FC<Player> = (player) => {
  const dispatch = useDispatch()
  const socket = React.useRef<WebSocket>()

  React.useEffect(() => {
    socket.current = new WebSocket("wss://steel-hot-rhinoceros.glitch.me")

    socket.current.onopen = () => {
      const message = {
        event: "connection",
        data: player.id
      }
      socket.current?.send(JSON.stringify(message))
    }

    socket.current.onclose = () => {
      console.log("Отключено")
    }

    socket.current.onmessage = (message) => {
      const newMessage: { event: string, data: { value: string, id: number } } = JSON.parse(message.data)
      switch(newMessage.event) {
        case "show":
          dispatch(showFeature({id: newMessage.data.id, feature: newMessage.data.value}))
          break
        case "voting":
          dispatch(getVote({ id: newMessage.data.id, vote: newMessage.data.value }))
          break
      }
    }
    
    socket.current.onerror = (err) => {
      console.log(err)
    }
  }, [])
  
  return (
    <div className="specifications">
      <div className="specifications__tittle">Карточка игрока</div>
      <div className="specifications__elem">Номер игрока: {player.id}</div>
      
      <span>Имя</span>
      <input onChange={(event) => dispatch(getName( {name: event.target.value, id: player.id} ))} value = {player.name} type="text" className="specifications__input" />
      
      <span>Ссылка на OBS</span>
      <input onChange={(event) => dispatch(getCam( {link: event.target.value, id: player.id} ))} value = {player.camera.link} type="text" className="specifications__input" />
      
      <div onClick={() => updateFeature("gender", socket.current, player.id)} className="specifications__elem">Пол: {player.gender.value}</div>
      <div onClick={() => updateFeature("age", socket.current, player.id)} className="specifications__elem">Возраст: {player.age.value} лет</div>
      <div onClick={() => updateFeature("profession", socket.current, player.id)} className="specifications__elem">Профессия:<br />{player.profession.value}</div>
      <div onClick={() => updateFeature("health", socket.current, player.id)} className="specifications__elem">Здоровье:<br />{player.health.value}</div>
      <div onClick={() => updateFeature("phobia", socket.current, player.id)} className="specifications__elem">Фобия:<br />{player.phobia.value}</div>
      <div onClick={() => updateFeature("hobby", socket.current, player.id)} className="specifications__elem">Хобби:<br />{player.hobby.value}</div>
      <div onClick={() => updateFeature("fact1", socket.current, player.id)} className="specifications__elem">Факт 1:<br />{player.fact1.value}</div>
      <div onClick={() => updateFeature("fact2", socket.current, player.id)} className="specifications__elem">Факт 2:<br />{player.fact2.value}</div>

      <div className="mirroring-block">
        <span>Отзеркаливание</span>
        <input type="checkbox" id='mirroring' className='custom-checkbox' onClick={() => dispatch(setMirrored(player.id))}/>
        <label htmlFor="mirroring"></label>
      </div>
      
    </div>
  )
}

export default Card