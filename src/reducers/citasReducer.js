import { SHOW_CITAS, ADD_CITAS, DELETE_CITAS } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  citas: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_CITAS':
      return {
        ...state
      }
    case 'ADD_CITAS':
      return {
        ...state,
        citas: [...state.citas, action.payload]
      }
    case 'DELETE_CITAS':
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
      }
    default: return state
  }
}