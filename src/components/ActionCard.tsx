import React from 'react'
import { useDispatch } from 'react-redux'

import '../styles/actionCard.css'

const actionCards1 =  [
  'Меняет текущую профессию на новую',
  'Меняет текущую фобию на новую',
  'Меняет текущее здоровье на новое',
  'Ворует здоровье у игрока перед вами',
  'Ворует фобию у игрока перед вами',
  'Ворует профессию у игрока перед вами',
]

type ActionCardProps = {
  actionCard1?: number;
  actionCard2?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ actionCard1, actionCard2 }) => {
  const id = window.location.pathname.slice(7)
  const dispatch = useDispatch()
  return (
    <div className='action-cards'>
      <div className='action-card'>
        <h1>Карточка действий 1</h1>
        {
          actionCard1?
            <>
              <p>{ actionCards1[actionCard1] }</p>
            </>:
            "??????????"
        }
        
      </div>
      <div className='action-card'>
        <h1>Карточка действий 2</h1>
        <p>{actionCard2 || "??????"}</p>
      </div>
    </div>
  )
}



export default ActionCard