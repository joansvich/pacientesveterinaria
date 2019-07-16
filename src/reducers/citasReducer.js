import { SHOW_CITAS, ADD_CITAS, DELETE_CITAS, IS_ERROR } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  citas: [
    {
      id: 0,
      fecha: '10-02-20',
      hora: '10:30',
      mascota: 'Lua',
      propietario: 'Monica',
      sintomas: 'No quiere comer'
    },
    {
      id: 1,
      fecha: '10-02-20',
      hora: '10:30',
      mascota: 'Leo',
      propietario: 'Monica',
      sintomas: 'No quiere comer'
    }
  ],
  error: false
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
    case 'IS_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: return state
  }
}