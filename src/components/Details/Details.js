import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouther } from 'react-router-dom'

export const Details = (props) => {
 const {translatedText, original} = props
    return (
        <div>
          <div className='banner'>
          <Link to="/translations" className="header-a">
            Return to Translations
          </Link>
          <Link to="/" className="header-a">
              Translate to French.
          </Link>
        </div>
          <div className="details-field">
            <section className="left">
              <h1>Français</h1>
              {translatedText}
            </section>
            <section className="right">
              <h1>English</h1>
              {original}
            </section>
          </div>
        </div>
    )
}

export default Details

Details.propTypes = {
  id: PropTypes.string,
  translatedText: PropTypes.string,
  original: PropTypes.string
}