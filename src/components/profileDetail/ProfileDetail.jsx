import React from "react";
import { Link } from "react-router-dom";
import "./ProfileDetail.css";
const ProfileDetail = (props) => {
  const { nickName, fullname, disp } = props;
  return (
    <>
      <div className="profile_detail_wrapper">
        <div className="profile_top">
          <div className="nick">
            <p>{nickName}</p>
          </div>
          <p className="full_name">{fullname}</p>
          <p className="Dissp">{disp}</p>
        </div>
        <div className="bottom_profile">
          <Link to="#">Profile</Link>
          <Link to="#">Setting</Link>
          <Link to="#">Notifications</Link>
          <Link to="#">Logout</Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
