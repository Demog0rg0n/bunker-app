import React from 'react'

import '../styles/actionCard.css' 

type ActionCardProps = {
  actionCard1?: {value: string, isShowed: boolean};
  actionCard2?: {value: string, isShowed: boolean};
}

const ActionCard: React.FC<ActionCardProps> = ({ actionCard1, actionCard2 }) => {

  return (
    <div className='action-cards'>
      <div className='action-card'>
        <h2>Карточка действий 1</h2>
        <p>{ actionCard1?.value || "??????" }</p>
      </div>
      <div className='action-card'>
        <h2>Карточка действий 2</h2>
        <p>{actionCard2?.value || "??????"}</p>
      </div>
    </div>
  )}

export default ActionCard