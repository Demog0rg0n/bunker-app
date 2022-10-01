import React from 'react'

import '../styles/card.css'

import { useDispatch } from 'react-redux'
import { generateCard, getName, showFeature, showGender } from '../redux/slices/cardSlice'
import { useLocation } from 'react-router'
import { InitialCard } from '../redux/supportingScripts'

const Card: React.FC<InitialCard> = ({ profession, age, gender, health, phobia, hobby, fact1, fact2, isGenerated }) => {
  const { pathname } = useLocation()
  const id = pathname.slice(7)
  const dispatch = useDispatch()
  return (
    <div className="specifications">
      <div className="specifications__tittle">Карточка игрока</div>
      <div className="specifications__elem">Номер игрока: {id}</div>
      <span>Имя</span>
      <input onChange={(event) => dispatch(getName( event.target.value ))} type="text" className="specifications__input" />
      <div onClick={() => dispatch(showGender())} className="specifications__elem">Пол: {gender.data}</div>
      <div onClick={() => dispatch(showFeature("age"))} className="specifications__elem">Возраст: {age} лет</div>
      <div onClick={() => dispatch(showFeature("profession"))} className="specifications__elem">Профессия:<br />{profession}</div>
      <div onClick={() => dispatch(showFeature("health"))} className="specifications__elem">Здоровье:<br />{health}</div>
      <div onClick={() => dispatch(showFeature("phobia"))} className="specifications__elem">Фобия:<br />{phobia}</div>
      <div onClick={() => dispatch(showFeature("hobby"))} className="specifications__elem">Хобби:<br />{hobby}</div>
      <div onClick={() => dispatch(showFeature("fact1"))} className="specifications__elem">Факт 1:<br />{fact1}</div>
      <div onClick={() => dispatch(showFeature("fact2"))} className="specifications__elem">Факт 2:<br />{fact2}</div>
      { !isGenerated &&
        <button className='cardButton' onClick={() => dispatch(generateCard())}>Сгенерировать карточку</button>
      }
    </div>
  )
}

export default Card