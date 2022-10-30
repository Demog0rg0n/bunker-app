import React from 'react'

import '../styles/card.css'

import { useDispatch } from 'react-redux'

import { getName, showFeature } from '../redux/slices/playerSlice'
import { Player } from '../redux/supportingScripts'

const Card: React.FC<Player> = (player) => {
  const dispatch = useDispatch()
  
  return (
    <div className="specifications">
      <div className="specifications__tittle">Карточка игрока</div>
      <div className="specifications__elem">Номер игрока: {id}</div>
      <span>Имя</span>
      <input onChange={(event) => dispatch(getName( {name: event.target.value, id} ))} value = {name} type="text" className="specifications__input" />
      <div onClick={() => dispatch(showFeature({feature: "gender", id}))} className="specifications__elem">Пол: {gender.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "age", id}))} className="specifications__elem">Возраст: {age.value} лет</div>
      <div onClick={() => dispatch(showFeature({feature: "profession", id}))} className="specifications__elem">Профессия:<br />{profession.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "health", id}))} className="specifications__elem">Здоровье:<br />{health.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "phobia", id}))} className="specifications__elem">Фобия:<br />{phobia.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "hobby", id}))} className="specifications__elem">Хобби:<br />{hobby.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "fact1", id}))} className="specifications__elem">Факт 1:<br />{fact1.value}</div>
      <div onClick={() => dispatch(showFeature({feature: "fact2", id}))} className="specifications__elem">Факт 2:<br />{fact2.value}</div>
    </div>
  )
}

export default Card