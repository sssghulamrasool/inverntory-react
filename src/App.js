import { useState } from "react"
import "./App.css"
import Header from "./layout/header/Header"
import Sidebar from "./layout/sidebar/Sidebar"
import MainPage from "./pages/mainPage"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />

        <MainPage />
      </div>

      {/* <MainPage /> */}
    </div>
  )
}

export default App
