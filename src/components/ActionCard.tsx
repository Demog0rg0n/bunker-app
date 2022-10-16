import React from 'react'
import { useDispatch } from 'react-redux'
import { changeProfession, changeHealth, changePhobia, stealHealth, stealPhobia, stealProfession } from '../redux/slices/playerSlice'

import '../styles/actionCard.css'

const actionCards1 =  [
  { func: changeProfession, description: 'Меняет текущую профессию на новую' },
  { func: changePhobia, description: 'Меняет текущую фобию на новую' },
  { func: changeHealth, description: 'Меняет текущее здоровье на новое' },
  { func: stealHealth, description: 'Ворует здоровье у игрока перед вами' },
  { func: stealPhobia, description: 'Ворует фобию у игрока перед вами' },
  { func: stealProfession, description: 'Ворует профессию у игрока перед вами' },
]

type ActionCardProps = {
  actionCard1: number;
  actionCard2: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ actionCard1, actionCard2 }) => {
  const id = window.location.pathname.slice(7)
  const dispatch = useDispatch()
  return (
    <div className='action-cards'>
      <div className='action-card'>
        <h1>Карточка действий 1</h1>
        {
          actionCard1 >= 0? 
            <>
              <p>{actionCards1[actionCard1].description}</p>
              <button onClick={() => dispatch(actionCards1[actionCard1].func(+id))} className='cardButton'>Использовать</button>
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