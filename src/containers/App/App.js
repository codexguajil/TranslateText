import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Form from '../../components/Form/Form';
import { storeTranslation } from '../../actions';
import PhraseContainer from '../PhraseContainer/PhraseContainer';
import key from '../../utils/apiKEY';
import PropTypes from 'prop-types';
import {Details} from '../../components/Details/Details';
import {postMessage} from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }

  handleError = (message) => {
    this.props.postMessage(message)
    setTimeout(() => {
      this.props.postMessage('')
    }, 2000)
  }

  translateWords = async (content) => {
    this.setState({isLoading: true})
    const shortid = require('shortid');
    let newPhrase;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${key}&format=text`
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(content),
      })
      newPhrase = await response.json()
    } catch(error) {
      return error.message
    }
    this.setState({isLoading: false})
    this.props.storeTranslation({...newPhrase.data.translations[0], id: shortid.generate(), original: content.q})
  }

  handleFormSubmit = (text, lang) => {
    let content = {
      'q': text,
      'target': lang
    }
    this.translateWords(content)
  }

  findTranslation = ({match}) => {
    const foundTranslation = this.props.translations.find(card => card.id === match.params.id)
    if(!foundTranslation) {
      return '404 no translation found!'
    }
    return <Details {...foundTranslation} />
  }

  render() {
    const {message} = this.props
    return (
      <div className="App">
       <Route exact path='/' component={ () => <Form handleSubmit={this.handleFormSubmit} handleError={this.handleError} translations={this.props.translations} />} />
       <p className='message'>{message}</p>
       <Route exact path='/translations' component={ () => <PhraseContainer loading={this.state.isLoading} /> } />
       <Route path='/translations/:id' render={this.findTranslation} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  translations: state.translations,
  message: state.message
})

export const mapDispatchToProps = (dispatch) => ({
  storeTranslation: (translations) => dispatch(storeTranslation(translations)),
  postMessage: (message) => dispatch(postMessage(message))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  translations: PropTypes.array,
  storeTranslation: PropTypes.func
}