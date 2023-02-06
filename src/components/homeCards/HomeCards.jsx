import React from "react"
import "./HomeCards.css"
const HomeCards = (props) => {
  const { heading } = props
  return (
    <>
      <div className="card_wrapepr">
        <div className="top_card_">
          <h5>{heading}</h5>
          <div className="cards_icons">
            <i className="fa-sharp fa-solid fa-arrows-rotate"></i>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="middile_card">
          <div className="timer">
            <h2>50</h2> <p>Not Set</p>
          </div>
          <div className="timer">
            <h2>20</h2> <p>Set</p>
          </div>
          <div className="timer">
            <h2>10</h2> <p>TDB</p>
          </div>
        </div>
        <div className="date_section">
          <div className="dateNedit">
            <h6>01/20/2022</h6>
            <p>Last Date Edited</p>
          </div>
          <button>View</button>
        </div>
      </div>
    </>
  )
}

export default HomeCards
