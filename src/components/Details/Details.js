import React from 'react'
import PropTypes from 'prop-types'

export const Details = (props) => {
 const {translatedText, original} = props
  console.log(props)
    return (
        <div className="details-field">
          <section className="left">
            {translatedText}
          </section>
          <section className="right">
            {original}
          </section>
        </div>
    )
}

export default Details

Details.propTypes = {
  id: PropTypes.string,
  translatedText: PropTypes.string
}
