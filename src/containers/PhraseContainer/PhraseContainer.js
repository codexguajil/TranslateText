import React, { Component } from 'react'
import { connect } from 'react-redux'
import Phrase from '../Phrase/Phrase'
import PropTypes from 'prop-types'
import {deleteTrans} from '../../actions'
import { Link, withRouter } from 'react-router-dom'

export class PhraseContainer extends Component {

  deleteTrans = (id, e) => {
    this.props.deleteTrans(id)
  }

  render() {
    return (
      <div>
        <div className='banner'>
          <h1 id="heading">Your Current Translations</h1>
          <Link to="/" className="header-a">
              Translate to French.
          </Link>
        </div>
      <div className="container">
        {this.props.loading && 
          <h1 className="loading">Loading...</h1>
        }
        {this.props.phrases && 
          this.props.phrases.map(phrase => <Phrase key={phrase.id} {...phrase} deleteTrans={this.deleteTrans}/>)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhraseContainer))

PhraseContainer.propTypes = {
  phrases: PropTypes.array
}