import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {count: 0}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment () {
    this.setState((cur) => {
      return {count: cur.count + 1}
    })
  }

  decrement () {
    this.setState((cur) => {
      return {count: cur.count - 1}
    })
  }
  render() {
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{date.toDateString()}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
