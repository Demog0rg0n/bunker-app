import React from 'react'

import featuries from '../../characteristics.json'

import { useSelector, useDispatch } from 'react-redux'
import { getBunker, getDisaster } from '../../redux/slices/headerSlice'
import { resetVotes, startVoting } from '../../redux/slices/adminSlice';
import { RootState } from '../../redux/storage';
import axios from 'axios';
import { Player } from '../../redux/supportingScripts';

// function reset(players: Player[]){
//   for(let i = 0; i < 12; i++){
//     axios.put("http://localhost:5000/player", players[i])
//   } 
// }

async function resetCards(players: Player[]) {
  localStorage.clear();
  localStorage.setItem('profession', JSON.stringify(featuries.professions));
  localStorage.setItem('age', JSON.stringify(featuries.age));
  localStorage.setItem('phobia', JSON.stringify(featuries.phobias));
  localStorage.setItem('health', JSON.stringify(featuries.health));
  localStorage.setItem('hobby', JSON.stringify(featuries.hobbies));
  localStorage.setItem('fact1', JSON.stringify(featuries.facts1));
  localStorage.setItem('fact2', JSON.stringify(featuries.facts2));
  localStorage.setItem('actionCard2', JSON.stringify(featuries.actionCard2));
  for(let i = 0; i < 12; i++){
    axios.put("http://localhost:5000/player", players[i])
  } 
}

const HeaderSettings: React.FC = () => {
  const { bunker, disaster } = useSelector((state: RootState) => state.Header)
  const players = useSelector((state: RootState) => state.Players.players)

  const dispatch = useDispatch();
  return (
    <div className="header-settings">
        <h1 className="settings-title">Насройки шапки</h1>
        <span>Катастрофа</span>
        <textarea
          onChange={(event) => dispatch(getDisaster(event.target.value))} 
          value = {disaster}
          cols = {45}
          rows = {6}>
        </textarea>
        <span>Бункер</span>
        <textarea
          wrap='hard'
          onChange={(event) => dispatch(getBunker(event.target.value))} 
          value = {bunker}
          cols = {45}
          rows = {6} >
        </textarea>
        <div className="general">
          <h1 className="settings-title">Общие настройки</h1>
          <button onClick = {() => resetCards(players)} className="settings__button">Сбросить карточки</button>
          {/* <button onClick = {() => reset(players)} className="settings__button">Сбросить </button> */}
          <button onClick = {() => dispatch(resetVotes())} className="settings__button">Сбросить голоса</button>
          <button onClick = {() => dispatch(startVoting())} className="settings__button">Голосование</button>
        </div>
      </div>
  )
}

export default HeaderSettings