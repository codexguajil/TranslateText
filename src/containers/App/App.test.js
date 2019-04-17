import React from 'react';
import ReactDOM from 'react-dom';
import {App, mapStateToProps, mapDispatchToProps} from './App';
import {storeTranslation, postMessage} from '../../actions'
import {shallow} from 'enzyme'
import {Details} from '../../components/Details/Details'

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

    it('calls dispatch with a message if there`s an error', () => {
      const mockError = 'this is an error'

      const mockDispatch = jest.fn()
      const actionToDispatch = postMessage(mockError)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.postMessage(mockError)

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
      let props = {
        storeTranslation: jest.fn()
      }

      wrapper = shallow(
        <App {...props} />
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

       await wrapper.instance().translateWords(mockContent)
       await expect(wrapper.instance().props.storeTranslation).toHaveBeenCalled()
    })

    it('should return an error if missing url or object', async () => {
      window.fetch = jest.fn(() => { return Promise.reject('error')})
        try {
          await fetch()
        } catch (error) {
          expect(error).toEqual('error')
        }
    })

    it('should set state when translateWords is called', async () => {
      wrapper = shallow(
        <App />
        )
        
      wrapper.instance().setState = jest.fn()
      await wrapper.instance().translateWords()
      await expect(wrapper.instance().setState).toHaveBeenCalled()
    })

    it('should set state to true when translateWords runs', async () => {
      wrapper = shallow(
        <App />
      )

      expect(wrapper.state('isLoading')).toEqual(false)
      await wrapper.instance().translateWords('hello')
      await expect(wrapper.state('isLoading')).toEqual(true)
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

    it('should return a Detail component if a translation is clicked', () => {
      let props = {
        translations: [{translatedText: 'bonjour', id: '14'}, {translatedText: 'au revoir', id: '10'}]
      }

      let match = { params: { id: '14' }, isExact: true, path: '', url: '' }

      wrapper = shallow(
        <App {...props} />
      )

      let result = wrapper.instance().findTranslation({match})
      expect(result).toEqual(<Details id="14" translatedText="bonjour" />)
    })
  })

  describe('handleError', () => {
    it('should post an error in store', () => {
      let props = {
        postMessage: jest.fn()
      }

      wrapper = shallow(
        <App {...props} />
      )

      wrapper.instance().handleError('error message')
      expect(wrapper.instance().props.postMessage).toHaveBeenCalledWith('error message')
    })
  })
})

