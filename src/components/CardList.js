import React, { Component } from "react";
import "./CardList.css";

export default class CardList extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="sec-listrepo">
        {items.map((item) => (
          <div className="card">
            <div className="head">
              <div className="name">{item.name}</div>
              <div className="status">
                <span>{item.status}</span>
              </div>
            </div>
            <div className="body">{item.description}</div>
            <div className="footer">
              <div className="status">
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
