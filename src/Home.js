import CardList from "./components/CardList.js";
import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="space" />
        <div className="container">
          <h1>Nuno Rigo Fadilah</h1>
          <div className="sec-repo">
            <h4>Repositories</h4>
            <div className="repo-list">
              <CardList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
