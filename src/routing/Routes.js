import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LeadTime from "../pages/leadTime/LeadTime"
import MainPage from "../pages/mainPage"
const Routes = () => {
  return (
    <>
      <Router>
        <Route exact path="/home" element={<MainPage />} />
      </Router>
    </>
  )
}

export default Routes
