import React from 'react'
import { useDispatch } from 'react-redux'
import { generateCard } from '../redux/slices/playerSlice'

const EmptyCard = ({id}: {id: number}) => {
    const dispatch = useDispatch()
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
    <button onClick={() => {dispatch(generateCard(id))}  } className="cardButton">Сгенерировать</button>
    </div>
  )
}

export default EmptyCard