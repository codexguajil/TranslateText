import React from 'react'
import {PhraseContainer, mapStateToProps, mapDispatchToProps} from './PhraseContainer'
import {Phrase} from '../Phrase/Phrase'
import {shallow} from 'enzyme'
import {deleteTrans} from '../../actions'
import {Link} from 'react-router-dom'

describe('PhraseContainer', () => {
  let wrapper;
    it('should match the snapshot', () => {
      wrapper = shallow(
        <PhraseContainer />
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should return a Phrase component for each phrase in store', () => {
      let props = {
        phrases: [{translatedText:'au revoir', id: '1'}, {translatedText: 'bonjour', id: '2'}],
        isLoading: false,
        children: []
      }

      wrapper = shallow(
        <PhraseContainer {...props} isLoading="false" deleteTrans={jest.fn}/>
      )

      let mockReturn = <div>
      <div className='banner'>
        <h1 id="heading">Your Current Translations</h1>
        <Link to="/" className="header-a">
            Translate to French.
        </Link>
      </div>
    <div className="container">
      {(wrapper.instance().props.isLoading) && 
        <h1 className="loading">Loading...</h1>
      }
      {(wrapper.instance().props.phrases) && 
        (wrapper.instance().props.phrases).map(phrase => <Phrase key={phrase.id} {...phrase} deleteTrans={wrapper.instance().deleteTrans}/>)
      }
    </div>
    </div>

      let expected = wrapper.instance().render()
      // expect(JSON.stringify(expected)).toEqual(JSON.stringify(mockReturn) )
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a deleteTrans action', () => {
      const mockId = 1

      const mockDispatch = jest.fn()
      const actionToDispatch = deleteTrans(mockId)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.deleteTrans(mockId)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('deleteTrans', () => {
    it('should delete a translation from the store', () => {
      let props = {
        deleteTrans: jest.fn()
      }
      let mockId = 1

      wrapper = shallow(
        <PhraseContainer {...props} />
      )

      wrapper.instance().deleteTrans(mockId)
      expect(wrapper.instance().props.deleteTrans).toHaveBeenCalledWith(mockId)
    })
  })
})