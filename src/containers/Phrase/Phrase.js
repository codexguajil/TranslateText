import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  addFave = () => {
    
  }

  deletePhrase = () => {

  }

  render() {
    return (
      <div onClick={this.addFave}
           className='text-box'
      >{this.props.translatedText}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  translations: state.translations
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps)(Phrase)