export const storeTranslation = (translation) => ({
  type: 'STORE_TRANS',
  translation
})

export const deleteTrans = (id) => ({
  type: 'DELETE_TRANS',
  id
})

export const postMessage = (message) => ({
  type: 'MESSAGE',
  message
})