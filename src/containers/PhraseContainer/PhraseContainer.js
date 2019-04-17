import React, { Component } from 'react'
import { connect } from 'react-redux'
import Phrase from '../Phrase/Phrase'

export class PhraseContainer extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1 id="heading">Your Past Translations</h1>
      <div className="container">
        {this.props.phrases && 
          this.props.phrases.map(phrase => {
            return <Phrase {...phrase} />
          })
        }
      </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  phrases: state.translations
})

export default connect(mapStateToProps)(PhraseContainer);