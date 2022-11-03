import React from 'react'
import { Link } from 'react-router-dom'
import PlayerIcon from '../components/PlayerIcon'

import '../styles/mainPage.css'



const MainPage: React.FC = () => {
    return (
    <div className="main">
        <div className="rules">
            <h1 className="rules-title">Правила</h1>
            <p>На земле произошла катастрофа. Вы с группой людей нашли бункер, но места в нём ограничены и вам предстоит решить кто попадёт в него, а кто нет</p>
            <p>Все игроки распределяют места и генерируют карточки характеристик (карточка находится справа).</p>
            <p>После того как все получат карточки начинается первый круг в результате которого все вскрывают профессию и любую характеристику на выбор, дальнейшие круги вскрывается одна любая характеристика на выбор (чтобы вскрыть характеристику достаточно кликнуть на неё).</p>
            <p>После каждого круга начинается голосование, для того чтобы выгнать самого бесполезного по вашему мнению игрока.</p>
            <p>Ваша задача убедить других что вы будете полезны в востановлении человечества, чтобы остальные игроки вас не выгнали.</p>
            <p>В бункер попадает всего половина игроков.</p>
            <p>Также у вас есть карточки дествий расположенные слева, их можно использовать в любой момент игры сказав "стоп игра" и прочитав содержимое карточки</p>
        </div>
        <div className="players">
            <PlayerIcon id='1' />
            <PlayerIcon id='2' />
            <PlayerIcon id='3' />
            <PlayerIcon id='4' />
            <PlayerIcon id='5' />
            <PlayerIcon id='6' />
            <PlayerIcon id='7' />
            <PlayerIcon id='8' />
            <PlayerIcon id='9' />
            <PlayerIcon id='10' />
            <PlayerIcon id='11' />
            <PlayerIcon id='12' />
        </div>
        <Link to={"/settings"} className="settings-link">
            <img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-74-512.png" alt="" />
        </Link>
    </div>
  )
}

export default MainPage