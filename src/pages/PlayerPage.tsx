import React from 'react'

import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';

import Webcams from '../components/Webcams'
import Card from '../components/Card'
import ActionCard from '../components/ActionCard';
import { RootState } from '../redux/storage';

const PlayerPage: React.FC = () => {
    const cards = useSelector((state: RootState) => state.Players.playersCard)
    return (
        <div className="wrapper">
            <>
            <Routes>
            {
                cards.map((card, index) => (
                    <Route key={index + 1} path={`/player${ index + 1 }`} element={<ActionCard actionCard1={card.actionCard1} actionCard2={card.actionCard2} />} />
                ))
            }    
            </Routes>
            <Webcams />      
            <Routes>
            {
                cards.map((card, index) => (
                <Route key={ index + 1 } path={`/player${ index + 1 }`} element={<Card {...card}/>} />
                ))
            }
            </Routes>
            </>
            
        </div>
    )
}

export default PlayerPage