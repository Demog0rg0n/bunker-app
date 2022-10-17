import React from 'react'

import '../styles/settingsPage.css'

import PlayerCardSettings from '../components/Settings/PlayerCardSettings'
import GeneralSettings from '../components/Settings/GeneralSettings'

const SettingsPage: React.FC = () => {
  
  return (
    <div className='main-settings'>
      <PlayerCardSettings />
      <GeneralSettings />
    </div>
  )
}

export default SettingsPage