import {storeTranslation, deleteTrans} from './index'

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

  it('should take in an id and return an object with type DELETE_TRANS', () => {
    const mockId = 2

    const expected = {
      type: 'DELETE_TRANS',
      id: mockId
    }

    const result = deleteTrans(mockId)

    expect(result).toEqual(expected)
  })
})