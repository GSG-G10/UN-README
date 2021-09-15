import React from "react";

import { Form } from "./Form";
import { Result } from "./Result";

import { getData } from "../../Utills/Getdata";

import "./style.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { word: "", res: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    getData(this.state.word).then((res) =>
      this.setState({ res }, function () {
        this.refs.audio.pause();
        this.refs.audio.load();
        this.refs.audio.play();
      })
    );
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ word: e.target.value });
  };
  // onTrackChange = (source) => {
  //   this.setState({ isPlaying: source }, function () {
  //     this.refs.audio.pause();
  //     this.refs.audio.load();
  //     this.refs.audio.play();
  //   });
  // };

  render() {
    return (
      <div className="card">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Result {...this.state} />
      </div>
    );
  }
}
