import React from 'react';
import ReactDOM from 'react-dom';
import {App, mapStateToProps, mapDispatchToProps} from './App';
import {storeTranslation} from '../../actions'
import {shallow} from 'enzyme'

jest.mock('../../actions')

describe('App', () => {
  let wrapper;

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    wrapper = shallow(
      <App />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return the translations in store', () => {
      const mockState = {
        translations: [],
        items: {}
      }

      const expected = {
        translations: []
      }

      const mockProps = mapStateToProps(mockState)
      expect(mockProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a storeTranslation action when storeTranslation is called', () => {
      const mockTranslation = {
        translatedText:"Bonjour.",
        detectedSourceLanguage:"en",
        id:"kVqASjuyE",
        original:"hello."
      }
      const mockDispatch = jest.fn()
      const actionToDispatch = storeTranslation(mockTranslation)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.storeTranslation(mockTranslation)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('handleFormSubmit', () => {
    it('should call translateWords with the submitted text to translate', () => {
      wrapper = shallow(
        <App />
      )

      wrapper.instance().translateWords = jest.fn()

      let mockText = 'hello;'
      let expected = {
        'q': mockText,
        'target': 'fr'
      }

      wrapper.instance().handleFormSubmit(mockText)
      expect(wrapper.instance().translateWords).toHaveBeenCalledWith(expected)
    })
  })

  describe('translateWords', () => {
    it('should update the store with a translation object', async () => {
      wrapper = shallow(
        <App />
      )

      const mockContent = {
        'q': 'hello',
        'target': 'fr'
      }

      const mockTranslation = {
        translatedText:"Bonjour.",
        detectedSourceLanguage:"en",
        id:"kVqASjuyE",
        original:"hello."
      }

       wrapper.instance().translateWords(mockContent)
       await expect(storeTranslation).toHaveBeenCalledWith(mockTranslation)
    })

    it('should return an error if missing url or object', async () => {
      window.fetch = jest.fn(() => { return Promise.reject('error')})
        try {
          await fetch()
        } catch (error) {
          expect(error).toEqual('error')
        }
    })
  })

  describe('findTranslation', () => {
    it('should return an error if translation is not found', () => {
      let props = {translations: [
        {
          translatedText:"Bonjour.",
          detectedSourceLanguage:"en",
          id:"kVqASjuyE",
          original:"hello."
        }
      ]
    }

      wrapper = shallow(
        <App {...props} />
      )
      let match = {params: {id: 14}, isExact: true, path: "", url: ""}
      let result = wrapper.instance().findTranslation({match})
      expect(result).toEqual('404 no translation found!')
    })
  })
})

