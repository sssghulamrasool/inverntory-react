import React, { useReducer, createContext } from "react"
const initialState = {
  mobileMenuToogle: false,
}
export const contentCreate = createContext()
const reducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE":
      return {
        mobileMenuToogle: !state.mobileMenuToogle,
      }
    default:
      return state
  }
}
export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <contentCreate.Provider value={{ state, dispatch }}>
      {props.children}
    </contentCreate.Provider>
  )
}
