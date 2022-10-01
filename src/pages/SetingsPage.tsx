import React from 'react'

import '../styles/settingsPage.css'

import PlayerCardSettings from '../components/Settings/PlayerCardSettings'
import HeaderSettings from '../components/Settings/HeaderSettings'

const SettingsPage: React.FC = () => {
  
  return (
    <div className='main-settings'>
      <PlayerCardSettings />
      <HeaderSettings />
    </div>
  )
}

export default SettingsPage