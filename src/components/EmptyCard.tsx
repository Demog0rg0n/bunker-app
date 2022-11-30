import React from 'react'

import { useDispatch } from 'react-redux'

import { generateCard, setCard } from '../redux/slices/playerSlice'

import { Player } from '../redux/supportingScripts'

const EmptyCard = ({id}: {id: number}) => {

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
  }, [])

  return (
    <div className="specifications">
      <div className="specifications__tittle">Карточка игрока</div>
      <div className="specifications__elem">Номер игрока: {id + 1}</div>
      <div className="specifications__elem">Пол: ??</div>
      <div className="specifications__elem">Возраст: ??? лет</div>
      <div className="specifications__elem">Профессия:<br />??????????</div>
      <div className="specifications__elem">Здоровье:<br />???????????</div>
      <div className="specifications__elem">Фобия:<br />???????????</div>
      <div className="specifications__elem">Хобби:<br />???????????</div>
      <div className="specifications__elem">Факт 1:<br />???????????</div>
      <div className="specifications__elem">Факт 2:<br />???????????</div>

      <button onClick={ () => {dispatch(generateCard({index: id, socket: socket.current}))} } className="cardButton">Сгенерировать</button>

    </div>
  )
}

export default EmptyCard