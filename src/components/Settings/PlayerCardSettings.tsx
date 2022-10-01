import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getVote } from '../../redux/slices/adminSlice'
import {changeProfession, changeHealth, changePhobia, changeHobby, changeFact1, changeFact2, removePlayer} from '../../redux/slices/cardSlice'
import { RootState } from '../../redux/storage'

const PlayerCardSettings: React.FC = () => {
  const [id, setId] = React.useState(1)
  const card = useSelector((state: RootState) => state.Cards.playersCard)[id - 1]
  const dispatch = useDispatch()

  function voting(id: number, key: string, value: string){
    if(key === "Enter"){
      dispatch(getVote({id, data: value}))
      alert("Голос засчитан")
    }
  }

  return (
    <div className="player-card">
        <h1 className="player-card__title">Настройки карточек</h1>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Профессия</span>
            <input onChange={(event) => alert(event.target.value)} type="text" value={card.profession} />  
          </div>
          <img onClick = {() => dispatch(changeProfession(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Здоровье</span>
            <input onChange={(event) => alert(event.target.value)} type="text" value={card.health} />  
          </div>
          <img onClick = {() => dispatch(changeHealth(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Хобби</span>
            <input onChange={(event) => alert(event.target.value)} 
              type="text" 
              value={card.hobby} />  
          </div>
          <img onClick = {() => dispatch(changeHobby(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Фобия</span>
            <input onChange={(event) => alert(event.target.value)} type="text" value={card.phobia} />  
          </div>
          <img onClick = {() => dispatch(changePhobia(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Факт 1</span>
            <input onChange={(event) => alert(event.target.value)} type="text" value={card.fact1} />  
          </div>
          <img onClick = {() => dispatch(changeFact1(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>
        <div className="player-card__elem">
          <div className="player-card__elem__left">
            <span>Факт 2</span>
            <input onChange={(event) => alert(event.target.value)} type="text" value={card.fact2} />  
          </div>
          <img onClick = {() => dispatch(changeFact2(id))} src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/5_glyph-256.png" className="rerol-button" alt='' />
        </div>

        <div className="player-card__midle">
          <div className="vote">
            <span>Голос</span>
            <input onKeyDown = {(event) => voting(id, event.code, event.currentTarget.value)} type="text" />
          </div>
          <button onClick={() => dispatch(removePlayer(id))} className='settings__button'>Выгнать</button>
        </div>

        <div className="player-card__bottom">
          <img 
            src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/arrow-left-interface-512.png" alt=""
            onClick={() => id > 1 && setId(id - 1)} 
          />
          <span>{id}</span>
          <img 
            src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/arrow-right-interface-256.png" alt=""
            onClick={() => id < 12 && setId(id + 1)} 
          />
        </div>
      </div>
  )
}

export default PlayerCardSettings