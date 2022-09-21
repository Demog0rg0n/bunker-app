import React from 'react'
import { useSelector } from 'react-redux'


const Camera = ( {index} ) => {
  const { votes, isStarted } = useSelector(state => state.Votes)
  const [active, setActive] = React.useState(false)
  React.useEffect(() => {
    setActive(isStarted)
  }, [isStarted])
  const players = useSelector(state => state.Cards.players)
  const player = players[index]
  console.log(player.gender.link)
  return (
    <div className="cam">
        <div className = { active? "cam__votes active": "cam__votes"}>
          { votes[index].length > 0 ?
              votes[index].join(","): ""
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