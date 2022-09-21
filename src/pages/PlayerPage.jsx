import React from 'react'

import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';

import Webcams from '../components/Webcams'
import Card from '../components/Card'
import ActionCard from '../components/ActionCard';

const PlayerPage = () => {
    const cards = useSelector(state => state.Cards.playersCard)
    const players = useSelector(state => state.Cards.players)
    return (
        <div className="wrapper">
            <Routes>
            {
                cards.map((card, index) => (
                    <Route key={index + 1} path={`/player${ index + 1 }`} element={<ActionCard actionCard1={card.actionCard1} actionCard2={card.actionCard2} />} />
                ))
            }    
            </Routes>
            <Webcams />
            {
                React.useEffect(() => {
                    <Webcams />
                }, [players])
            }
            
            <Routes>
            {
                cards.map((card, index) => (
                <Route key={ index + 1 } path={`/player${ index + 1 }`} element={<Card {...card}/>} />
                ))
            }
            </Routes>
        </div>
    )
}

export default PlayerPage