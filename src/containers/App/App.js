import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Link } from 'react-router-dom'
import Form from '../../components/Form/Form';
import { storeTranslation } from '../../actions';
import PhraseContainer from '../PhraseContainer/PhraseContainer';
import key from '../../utils/apiKEY';
import PropTypes from 'prop-types';
import {Details} from '../../components/Details/Details';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      translations: [],
    }
  }

  translateWords = async (content) => {
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
    this.props.storeTranslation({...newPhrase.data.translations[0], id: shortid.generate(), original: content.q})
  }

  handleFormSubmit = (text) => {
    let content = {
      'q': text,
      'target': 'fr'
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
    return (
      <div className="App">
        <Link to="/" className="header">
          Translate to French.
        </Link>
        <video autoPlay muted loop className="shown">
          <source src="https://previews.customer.envatousercontent.com/h264-video-previews/de1c5be5-54d3-49f3-92d2-d3cc647950c4/9537502.mp4" type="video/mp4" />
        </video>
       <Form handleSubmit={this.handleFormSubmit}/>
       <Route exact path='/' component={PhraseContainer}/>
       <Route path='/translations/:id' render={this.findTranslation} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  translations: state.translations
})

export const mapDispatchToProps = (dispatch) => ({
  storeTranslation: (translations) => dispatch(storeTranslation(translations))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  translations: PropTypes.array,
  storeTranslation: PropTypes.func
}