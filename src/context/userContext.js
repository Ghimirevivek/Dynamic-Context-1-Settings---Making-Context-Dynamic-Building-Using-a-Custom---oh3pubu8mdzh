import React, { createContext, useState } from 'react'

const UserContext = createContext()

const Wrapper = (props) => {
  const [changeGreeting, setChangeGreeting] = useState('')
  const greeting = { changeGreeting, setChangeGreeting }

  return (
    <UserContext.Provider value={greeting}>
      {props.children}
    </UserContext.Provider>
  )
}
export { Wrapper, UserContext }
