import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export const Settings = () => {
  // to be implemented in context
  const { setChangeGreeting } = useContext(UserContext)

  return (
    <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
      <h4>Settings</h4>
      <input
        type={'text'}
        onChange={(e) => setChangeGreeting(e.target.value)}
      />
    </div>
  )
}
