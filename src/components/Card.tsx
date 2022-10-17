import React from 'react'

import '../styles/card.css'

import { useDispatch } from 'react-redux'

import { generateCard, getName, showFeature } from '../redux/slices/playerSlice'
import { InitialCard, } from '../redux/supportingScripts'

const Card: React.FC<InitialCard> = ({ id, profession, age, gender, health, phobia, hobby, fact1, fact2, isGenerated }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="specifications">
      <div className="specifications__tittle">Карточка игрока</div>
      <div className="specifications__elem">Номер игрока: {id}</div>
      <span>Имя</span>
      <input onChange={(event) => dispatch(getName( {name: event.target.value, id} ))} type="text" className="specifications__input" />
      <div onClick={() => dispatch(showFeature({feature: "gender", id}))} className="specifications__elem">Пол: {gender}</div>
      <div onClick={() => dispatch(showFeature({feature: "age", id}))} className="specifications__elem">Возраст: {age} лет</div>
      <div onClick={() => dispatch(showFeature({feature: "profession", id}))} className="specifications__elem">Профессия:<br />{profession}</div>
      <div onClick={() => dispatch(showFeature({feature: "health", id}))} className="specifications__elem">Здоровье:<br />{health}</div>
      <div onClick={() => dispatch(showFeature({feature: "phobia", id}))} className="specifications__elem">Фобия:<br />{phobia}</div>
      <div onClick={() => dispatch(showFeature({feature: "hobby", id}))} className="specifications__elem">Хобби:<br />{hobby}</div>
      <div onClick={() => dispatch(showFeature({feature: "fact1", id}))} className="specifications__elem">Факт 1:<br />{fact1}</div>
      <div onClick={() => dispatch(showFeature({feature: "fact2", id}))} className="specifications__elem">Факт 2:<br />{fact2}</div>
      { !isGenerated &&
        <button className='cardButton' onClick={() => dispatch(generateCard(id))}>Сгенерировать карточку</button>
      }
    </div>
  )
}

export default Card