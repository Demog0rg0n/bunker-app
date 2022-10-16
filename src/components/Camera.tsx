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
            <div className="cam__name">{player.id + "." + player.name}</div>
            <div className="cam__profession">{player.profession}</div>
            <img className="cam__gender" src={player.gender.link} alt="" />
        </div>
        <div className="cam__right">
            <div className="cam__right__elem">{player.health}</div>
            <div className="cam__right__elem">{player.phobia}</div>
            <div className="cam__right__elem">{player.hobby}</div>
            <div className="cam__right__elem">{player.fact1}</div>
            <div className="cam__right__elem">{player.fact2}</div>
        </div>
    </div>
  )
}

export default Camera