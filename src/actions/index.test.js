import {storeTranslation} from './index'

describe('storeTranslation', () => {

  it('should take in a translation object and return an object with the type STORE_TRANS', () => {
    
    const mockTranslation = {
      translatedText:"Bonjour.",
      detectedSourceLanguage:"en",
      id:"fIAkM0VxL",
      original:"hello."
    }

    const expected = {
      type: 'STORE_TRANS',
      translation: mockTranslation
    }

    const result = storeTranslation(mockTranslation)

    expect(result).toEqual(expected)
  })
})