// actions
import {
    CLICK_UPDATE,
  } from '../actions/actionType'
  
  const initialState = {
      id: '111',
      idCourse: '111',
      tipo: 'MODELO',
      idAula: '123',
    };
    export const clickReducer = (state = initialState, action) => {
      switch (action.type) {
        case CLICK_UPDATE:
          return {
            ...state,
            id: action.payload.id,
            tipo: action.payload.tipo,
            idCourse: action.payload.idCourse,
          };
  
        default:
          return state;
      }
    };