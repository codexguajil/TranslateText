export const translations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_TRANS':
      return [...state, action.translation]

    default:
      return state
  }
} 