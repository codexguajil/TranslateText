import React, { Component } from 'react'
import { connect } from 'react-redux'
import Phrase from '../Phrase/Phrase'
import PropTypes from 'prop-types'

export class PhraseContainer extends Component {

  render() {
    return (
      <div>
      <h1 id="heading">Your Past Translations</h1>
      <div className="container">
        {this.props.phrases && 
          this.props.phrases.map(phrase => <Phrase {...phrase} />)
        }
      </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  phrases: state.translations
})

export default connect(mapStateToProps)(PhraseContainer)

PhraseContainer.propTypes = {
  phrases: PropTypes.array
}