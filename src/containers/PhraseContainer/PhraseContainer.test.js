import React from 'react'
import {PhraseContainer, mapStateToProps} from './PhraseContainer'
import {shallow} from 'enzyme'

describe('PhraseContainer', () => {
  let wrapper;
    it('should match the snapshot', () => {
      wrapper = shallow(
        <PhraseContainer />
      )
      expect(wrapper).toMatchSnapshot()
    })

  describe('mapStateToProps', () => {
    it('should return the phrases in store', () => {
      const mockState = {
        translations: [],
        items: {}
      }

      const expected = {
        phrases: []
      }

      const mockProps = mapStateToProps(mockState)
      expect(mockProps).toEqual(expected)
    })
  })
})