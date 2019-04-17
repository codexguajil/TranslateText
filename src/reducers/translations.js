export const translations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_TRANS':
      return [...state, action.translation]

    case 'DELETE_TRANS':
      return state.filter(trans => trans.id != action.id)

    default:
      return state
  }
} 