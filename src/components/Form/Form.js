import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

export class Form extends Component {
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
    let { history } = this.props
    e.preventDefault()
    if(this.state.text) {
      this.props.handleSubmit(this.state.text)
      history.push('/translations')
    }
  }

  render() {
    return (
      <div>
          <Link to='/translations' className="nav-link">
            See Translations.
          </Link>
          <Link to="/" className="header">
            Translate to French.
          </Link>
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
      </div>
    )
  }
}

export default withRouter(Form)