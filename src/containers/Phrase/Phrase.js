import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const Phrase = (props) => {
 const {id, translatedText} = props

    return (
      <Link to={`/translations/${id}`} className="text-link">
        <div className="text-box">
        {translatedText}
        </div>
      </Link>
    )
  
}

export default Phrase