import React from "react"
import "./AddWidget.css"
import check from "../../assets/images/check.png"
const AddWidget = () => {
  return (
    <>
      <div className="widget_wrapper">
        <div className="widget_title">
          <h2>Add Widget</h2>
        </div>
        <div className="list_widget">
          <ul>
            <li>
              Lead Time{" "}
              <span>
                <img src={check} />
              </span>
            </li>
            <li>
              Order Cycle{" "}
              <span>
                <img src={check} />
              </span>
            </li>
            <li>
              Min/Max{" "}
              <span>
                <img src={check} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AddWidget
