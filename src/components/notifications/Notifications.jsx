import React from "react"
import "./Notifications.css"
import checking from "../../assets/images/chcing.png"
import close from "../../assets/images/close.png"
import arrow from "../../assets/images/arrrr.png"
const Notifications = () => {
  return (
    <>
      <div className="notification_wrapper">
        <div className="noti_main_head">
          <h1>Notifications</h1>
        </div>
        <div className="notification_list">
          <div className="list_">
            <div>
              <img src={checking} alt="" className="img-fluid noti_img" />
            </div>
            <div className="noti_disp">
              <p className="noti_heading">You ran a new max/min</p>
              <p className="times">10 min ago</p>
            </div>
          </div>
          <div className="list_">
            <div>
              <img src={checking} alt="" className="img-fluid noti_img" />
            </div>
            <div className="noti_disp">
              <p className="noti_heading">You ran a new lead time</p>
              <p className="times">12 min ago</p>
            </div>
          </div>
          <div className="list_">
            <div>
              <img src={close} alt="" className="img-fluid noti_img" />
            </div>
            <div className="noti_disp">
              <p className="noti_heading">System Error</p>
              <p className="times">15 min ago</p>
            </div>
          </div>
          <div className="list_">
            <div>
              <img src={checking} alt="" className="img-fluid noti_img" />
            </div>
            <div className="noti_disp">
              <p className="noti_heading">You ran a new session</p>
              <p className="times">20 min ago</p>
            </div>
          </div>
        </div>
        <div className="Load_button">
          <button>
            <span>
              <img src={arrow} alt="" className="noti_img" />
            </span>
            Load more...
          </button>
        </div>
      </div>
    </>
  )
}

export default Notifications
