import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.state = {
      date: new Date(),
      startTimer: true,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleStartTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      startTimer: false,
    });
  }
  handleStopTimer() {
    clearInterval(this.timerID);
    this.setState({
      startTimer: true,
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button
          onClick={
            this.state.startTimer ? this.handleStartTimer : this.handleStopTimer
          }
        >
          {this.state.startTimer ? "Start" : "Stop"}
        </button>
      </div>
    );
  }
}

export default Clock;
