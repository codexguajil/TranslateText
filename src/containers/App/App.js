import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Link } from 'react-router-dom'
import Form from '../../components/Form/Form';
import { storeTranslation } from '../../actions';
import PhraseContainer from '../PhraseContainer/PhraseContainer';
import key from '../../utils/apiKEY';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      translations: [],
    }
  }
  
  componentDidMount = async () => {
    
  }

  translateWords = async (content) => {
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
    this.props.storeTranslation(newPhrase.data.translations[0])
  }

  handleFormSubmit = (text) => {
    let content = {
      'q': text,
      'target': 'fr'
    }
    this.translateWords(content)
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          Translate To French!
        </header>
        <video autoPlay muted loop className="shown">
          <source src="https://previews.customer.envatousercontent.com/h264-video-previews/de1c5be5-54d3-49f3-92d2-d3cc647950c4/9537502.mp4" type="video/mp4" />
        </video>
       <Form handleSubmit={this.handleFormSubmit}/>
       <Route exact path='/' component={PhraseContainer}/>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeTranslation: (translations) => dispatch(storeTranslation(translations))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
