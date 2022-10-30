import React from 'react'

import { Player } from '../redux/supportingScripts'

const Camera: React.FC<Player> = ( { id, age, name, profession, health, gender, hobby, phobia, fact1, fact2, votes} ) => {
  return (
    <div className="cam">
        <div className = { votes.length > 0? "cam__votes active": "cam__votes"}>
          { votes.length && 
              votes.join(",")
          }
        </div>
        <div className="cam__left">
          <div className="cam__left-top">
            <div className="cam__name">{ id + "." + name }</div>
            <div className="cam__gender-age">
              <div>{ gender.isShowed? gender.value: "??" }</div>
              <div>{ age.isShowed? age.value: "??" }</div>
            </div>
          </div>
          <div className="cam__left-bottom">
            <div className="cam__feature">{ profession.isShowed? profession.value: "Профессия" }</div>
            <div className="cam__feature">{ health.isShowed? health.value: "Здоровье" }</div>
            <div className="cam__feature">{ phobia.isShowed? phobia.value: "Фобия" }</div>
          </div>
        </div>
        <div className="cam__right">
            <div className="cam__feature">{ hobby.isShowed? hobby.value: "Хобби" }</div>
            <div className="cam__feature">{ fact1.isShowed? fact1.value: "Факт 1" }</div>
            <div className="cam__feature">{ fact2.isShowed? fact2.value: "Факт 2" }</div>
        </div>
    </div>
  )
}

export default Camera