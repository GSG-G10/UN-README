import React from "react";

import { Form } from "./Form";
import { Result } from "./Result";

import { getData } from "../../Utills/Getdata";

import "./style.css";

export default class Card extends React.Component {
    state = { word: "", res: {} };
    audio = React.createRef();

  handleSubmit = (e) => {
    getData(this.state.word).then((res) =>
      this.setState({ res }, function () {
        if (this.state.res[0]) {
          this.audio.pause();
          this.audio.load();
        }
      })
    );
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ word: e.target.value });
  };
  render() {
    return (
      <div className="card">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Result {...this.state} inputRef={el => this.audio = el} />
      </div>
    );
  }
}
