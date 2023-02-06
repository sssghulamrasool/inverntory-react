import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contentCreate } from "../../context/ContextApi"
import "./Sidebar.css"

const Sidebar = () => {
  const mobToggle = useContext(contentCreate)
  const value = mobToggle.state.mobileMenuToogle
  const conxt = useContext(contentCreate)
  const Menus = [
    {
      title: "Home",
      icon: <i className="fa-solid fa-house"></i>,
      path: "home",
    },
    {
      title: "Lead Time Overrides",
      icon: <i className="fa-solid fa-calendar-days"></i>,
      path: "leadTime",
    },
    {
      title: "Order Cycle Overrides",
      icon: <i className="fa-solid fa-sheet-plastic"></i>,
      path: "ordercycle",
    },
    {
      title: "Min/Max",
      icon: <i className="fa-sharp fa-solid fa-table-list"></i>,
      path: "min",
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="sidebar ">
        <div className={`${!open ? "sidebar_items" : "sidebar_items_2"}`}>
          <div className="icons">
            <i className="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
          </div>
          <ul className="navigation_list">
            {Menus.map((e, idx) => (
              <Link to={e.path} key={idx}>
                <li>
                  {e.icon}
                  <span className={`${open && "hidden"}`}>{e.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className={value ? "mobile_sidebar " : " mobile_sidebar_hidden"}>
        <div className="overlay"></div>
        <div className="sidebar_items ">
          <i
            className="fa-solid fa-xmark cancel_mob_tab"
            onClick={() => {
              conxt.dispatch({
                type: "TOOGLE",
              })
            }}
          ></i>
          <ul className="navigation_list">
            {Menus.map((e, idx) => (
              <Link to={e.path} key={idx}>
                <li>
                  {e.icon}
                  <span className={`open`}>{e.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
