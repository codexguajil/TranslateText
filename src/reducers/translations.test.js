import { translations } from './translations'
import { storeTranslation } from '../actions'

describe('storeTranslation', () => {
  
  it('should return an initial state', () => {
    const initialState = []
    const action = {}
    const result = translations(initialState, action)

    expect(result).toEqual(initialState)
  })

  it('should return a new state with an added translation', () => {
    const initialState = []
    const mockTranslation = {
      translatedText:"Bonjour.",
      detectedSourceLanguage:"en",
      id:"kVqASjuyE",
      original:"hello."
    }

    const action = storeTranslation(mockTranslation)
    const result = translations(initialState, action)

    expect(result).toEqual([mockTranslation])
  })
})
