import React, { Component } from 'react'
import { connect } from 'react-redux'
import Phrase from '../Phrase/Phrase'
import PropTypes from 'prop-types'
import {deleteTrans} from '../../actions'

export class PhraseContainer extends Component {

  deleteTrans = (id, e) => {
    this.props.deleteTrans(id)
  }

  render() {
    return (
      <div>
      <h1 id="heading">Your Past Translations</h1>
      <div className="container">
        {this.props.phrases && 
          this.props.phrases.map(phrase => <Phrase {...phrase} deleteTrans={this.deleteTrans}/>)
        }
      </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  phrases: state.translations
})

export const mapDispatchToProps = (dispatch) => ({
  deleteTrans: (id) => dispatch(deleteTrans(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhraseContainer)

PhraseContainer.propTypes = {
  phrases: PropTypes.array
}