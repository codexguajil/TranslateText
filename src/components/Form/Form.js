import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.text) {
      this.props.handleSubmit(this.state.text)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
            className="form">
        <div id="input-cont">
          <textarea value={this.state.text}
                  name="text"
                  onChange={this.handleChange}
                  className="input"
                  placeholder="Type your english text to translate here! Expand the text area for more space."
            />
          <button>Translate</button>
        </div>
      </form>
    )
  }
}