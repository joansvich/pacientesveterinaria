import { SHOW_CITAS, DELETE_CITAS, ADD_CITAS, IS_ERROR } from './types';

export const getCitas = () => {
  return {
    type: SHOW_CITAS
  }
}

export const addCitas = (cita) => {
  return {
    type: ADD_CITAS,
    payload: cita
  }
}

export const deleteCitas = (id) => {
  return {
    type: DELETE_CITAS,
    payload: id
  }
}

export const isError = (bool) => {
  return {
    type: IS_ERROR,
    payload: bool
  }
}