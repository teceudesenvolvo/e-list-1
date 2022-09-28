// actions
import {
    OPEN_PRODUCT
  } from '../actions/actionType'
  
  const initialState = {
      id: '111',
      idService: '111',
      tipo: 'MODELO',
      idProduct: '123',
    };
    export const clickReducer = (state = initialState, action) => {
      switch (action.type) {
        case OPEN_PRODUCT:
          return {
            ...state,
            id: action.payload.id,
            tipo: action.payload.tipo,
            idService: action.payload.idService,
            idProduct: action.payload.idProduct,
          };
  
        default:
          return state;
      }
    };