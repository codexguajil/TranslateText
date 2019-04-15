import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PhraseContainer extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.phrases && 
          this.props.phrases.map(phrase => {
            return <div>{phrase.translatedText}</div>
          })  
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  phrases: state.translations
})

export default connect(mapStateToProps)(PhraseContainer);