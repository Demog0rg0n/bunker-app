import React from 'react'

import featuries from '../../characteristics.json'

import { useDispatch } from 'react-redux'

import { resetVotes } from '../../redux/slices/playerSlice';
import { addBunker, addInfo, setDisaster } from '../../redux/slices/headerSlice';

async function resetCards() {
  localStorage.clear()
  localStorage.setItem('profession', JSON.stringify(featuries.professions));
  localStorage.setItem('age', JSON.stringify(featuries.age));
  localStorage.setItem('phobia', JSON.stringify(featuries.phobias));
  localStorage.setItem('health', JSON.stringify(featuries.health));
  localStorage.setItem('hobby', JSON.stringify(featuries.hobbies));
  localStorage.setItem('fact1', JSON.stringify(featuries.facts1));
  localStorage.setItem('fact2', JSON.stringify(featuries.facts2));
  localStorage.setItem('actionCard1', JSON.stringify(featuries.actionCard1));
  localStorage.setItem('actionCard2', JSON.stringify(featuries.actionCard2));
}

const HeaderSettings: React.FC = () => {
  const [ bunker, setBunker ] = React.useState("")
  const [ info, setInfo] = React.useState("")

  const dispatch = useDispatch();
  return (
    <div className="settings">
      <div className="header-settings">
        <h1 className="settings-title">Насройки шапки</h1>
        <div className="bunker-settings">
          <h3>Доп. информация</h3>
          <input type="text" onChange={(event) => {setInfo(event.target.value)}} value={info}/>
          <button onClick={() => {dispatch(addInfo(info))}} className='settings__button'>Добавить</button>
        </div>
        <div className="bunker-settings">
          <h3>Бункер</h3>
          <input type="text" onChange={(event) => {setBunker(event.target.value)}} value={bunker}/>
          <button onClick={() => {dispatch(addBunker(bunker))}} className='settings__button'>Добавить</button>
        </div>
        <div className="disaster-settings">
          <h3>Описание катастрофы</h3>
          <textarea onChange={(event) => dispatch(setDisaster(event.target.value))} name="disaster" cols={40} rows={6}></textarea>
        </div>
      </div>
      <div className="general-settings">
        <h1 className="settings-title">Общие настройки</h1>
        <button onClick = {() => resetCards()} className="settings__button">Сбросить карточки</button>
        <button onClick = {() => dispatch(resetVotes())} className="settings__button">Сбросить голоса</button>
      </div>
    </div>
  )
}

export default HeaderSettings