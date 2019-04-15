import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Form from '../../components/Form/Form';
import { storeTranslation } from '../../actions';
import PhraseContainer from '../PhraseContainer/PhraseContainer';

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
    const url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDhbvpRsgdOlTOEn90FLoYoj4C8EvV8zlE&format=text'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(content),
      })
      newPhrase = await response.json()
      console.log(newPhrase.data.translations)
      // return newPhrase;
    } catch(error) {
      return error.message
    }
    this.props.storeTranslation(newPhrase.data.translations[0])
    this.setState({
      translations: [...this.state.translations, newPhrase.data.translations[0]]
    })
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
       <Form handleSubmit={this.handleFormSubmit}/>
       <PhraseContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeTranslation: (translations) => dispatch(storeTranslation(translations))
})

export default connect(null, mapDispatchToProps)(App);
