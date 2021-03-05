import { createStore } from 'redux';

const initialState = {
    dev: false,
    data: {
        "eName": '',
        "vendor": '',
        "location": '',
        "model": '',
        "serial": '',
        "description": ''
    }
}

export const send = (eqp) => {
  return {
    type: "SEND",
    detailss: eqp
  }
}

export const change = () =>{
    return {
        type: "CHANGE"
    }
}

const sendReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND':
        return Object.assign({},state,{data:action.detailss});

    case 'CHANGE':
        return Object.assign({},state,{dev:!state.dev,data:initialState.data});

    default: return state
  }
};

export const store = createStore(sendReducer);
