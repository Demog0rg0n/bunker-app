import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../redux/storage'
import { Player } from '../redux/supportingScripts'

const Camera: React.FC<Player> = ( { id, age, name, profession, health, gender, hobby, phobia, fact1, fact2} ) => {
  const { votes, isStarted } = useSelector((state: RootState) => state.Votes)
  const [active, setActive] = React.useState(false)
  React.useEffect(() => {
    setActive(isStarted)
  }, [isStarted])
  return (
    <div className="cam">
        <div className = { active? "cam__votes active": "cam__votes"}>
          { votes[+id - 1].length > 0 ?
              votes[+id - 1].join(","): ""
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