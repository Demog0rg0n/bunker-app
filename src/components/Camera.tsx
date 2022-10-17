import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../redux/storage'
import { InitialPlayer } from '../redux/supportingScripts'

const Camera: React.FC<InitialPlayer> = ( player ) => {
  const { votes, isStarted } = useSelector((state: RootState) => state.Votes)
  const [active, setActive] = React.useState(false)
  React.useEffect(() => {
    setActive(isStarted)
  }, [isStarted])
  return (
    <div className="cam">
        <div className = { active? "cam__votes active": "cam__votes"}>
          { votes[+player.id - 1].length > 0 ?
              votes[+player.id - 1].join(","): ""
          }
        </div>
        <div className="cam__left">
          <div className="cam__left-top">
            <div className="cam__name">{ player.id + "." + player.name }</div>
            <div className="cam__gender-age">
              <div>{ player.gender }</div>
              <div>{ player.age }</div>
            </div>
          </div>
          <div className="cam__left-bottom">
            <div className="cam__feature">{ player.profession }</div>
            <div className="cam__feature">{ player.health }</div>
            <div className="cam__feature">{ player.phobia }</div>
          </div>
        </div>
        <div className="cam__right">
            <div className="cam__feature">{ player.hobby }</div>
            <div className="cam__feature">{ player.fact1 }</div>
            <div className="cam__feature">{ player.fact2 }</div>
        </div>
    </div>
  )
}

export default Camera