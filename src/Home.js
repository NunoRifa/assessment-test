import React, { Component } from "react";
import "./Home.css";
import CardList from "./components/CardList.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 0,
        name: "Shayna",
        status: "Public",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "JavaScript",
      },
      {
        id: 1,
        name: "Shayna Backend",
        status: "Private",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        type: "JavaScript",
      },
      {
        id: 1,
        name: "Shayna Partner",
        status: "Public",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        type: "JavaScript",
      },
    ];
  }
  
  render() {
    return (
      <div className="Home">
        <div className="space" />
        <div className="container">
          <h1>Nuno Rigo Fadilah</h1>
          <div className="sec-repo">
            <h4>Repositories</h4>
            <div className="repo-list">
              <CardList items={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
