import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeNavbar.css";
import login_img from './images-emp/swlogo.svg';
import dashboard_img from './images-emp/dashboard.svg';
import reports_img from './images-emp/reports.svg';

const EmployeeNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <img src={login_img} />
      </div>
      <div className="pages">
        <div>
          <Link to="/employee/dashboard">
          <img src={dashboard_img} />
            <span>Dashboard</span>
          </Link>
          <Link to="/employee/requests">
          <img src={reports_img} />
            <span>Requests</span>
          </Link>
          <Link to="/employee/track-request">
          <img src={reports_img} />
            <span>Track Request</span>
          </Link>
          <Link to="/employee/program">
          <img src={reports_img} />
            <span>Program</span>
          </Link>
        </div>
      </div>
      <div className="icons">
        <div className="profile-icon">
          <img src="/profile.png" alt="Profile" />
        </div>
        <div className="notification-icon">
          <img src="/notification.png" alt="Notification" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeNavbar;
