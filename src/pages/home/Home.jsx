import React, { useState } from "react"
import AddWidget from "../../components/addWIdget/AddWidget"
import HomeCards from "../../components/homeCards/HomeCards"
import "./Home.css"
const Home = () => {
  const [user, setUser] = useState("James")
  const [cardData, setCardData] = useState([
    {
      heading: "Lead Time",
    },
    {
      heading: "Order Cycle",
    },
    {
      heading: "Min/Max",
    },
  ])
  const [widgetToogle, setWidgetToogle] = useState(false)

  const _handleWidget = () => {
    setWidgetToogle(!widgetToogle)
  }
  const _handleCLoseWidget = () => {
    setWidgetToogle(false)
  }
  return (
    <>
      <section className="home_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-7 col-sm-12">
              <div className="heading_home">
                <h2>Welcome back , {user}</h2>
                <p>Here’s what’s happening with your pulse today.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
              <div className="add_widget text-end">
                <button onClick={_handleWidget}>
                  Add Widget
                  <span>
                    <i className="fa-sharp fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div className="add_wi_here" onClick={_handleCLoseWidget}>
                  {widgetToogle && <AddWidget />}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {cardData.map((e, idx) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={idx}>
                  <HomeCards heading={e.heading} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
