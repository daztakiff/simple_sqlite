import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'; // Optional: For custom styles

function SimpleNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div class="navbar-left">
            <a className="navbar-brand" href="#">MyApp</a>
        </div>
        <div class="navbar-right">
            <button className="dashboard-button btn btn-light" type="button">Dashboard</button>
            <button className="modify-data-button btn btn-light" type="button">Modify Data</button>
        </div>
      </div>

    </nav>
  );
}

export default SimpleNavbar;