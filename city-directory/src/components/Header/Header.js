import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo-title">
          <Link className="logo-img" to="/">
            <img src="https://cdn-icons.flaticon.com/png/512/1287/premium/1287899.png?token=exp=1647116135~hmac=c7fda3a071557ef2d01637045c179f56"></img>
          </Link>
          <div className="headline">
            <h1 className="title">POV</h1>
            <h5 className="subtitle">point of view</h5>
          </div>
        </div>
        <Link to="/" className="header-link">
          О сайте
        </Link>
        <Link to="/cities" className="header-link">
          Города
        </Link>
        <Link to="/compare" className="header-link">
          Сравнить
        </Link>
      </header>
    );
  }
}
