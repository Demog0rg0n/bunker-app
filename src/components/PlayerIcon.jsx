import React from 'react'
import { Link } from 'react-router-dom'

const PlayerIcon = ({ id, type }) => {
    return (
    <Link  to={`player${id}`} className={`${type} player-link`}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><circle cx="12" cy="8" fill="#fdfss" r="4"/><path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" fill="#fffff"/></svg>
    </Link>
  )
}

export default PlayerIcon