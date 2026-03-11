import React from 'react'

export const AppContent = createContext();

export const context = () => {
    const des = "hi, mate";
    const name = "leap";
    const age = 98;
    const address = [
        {id:1, street: 54, city: "PP"},
        {id:2, street: 94, city: "SR"},
        {id:3, street: 13, city: "KP"},
    ]
  return (
        <AppContent.Provider>

        </AppContent.Provider>
  )
}
