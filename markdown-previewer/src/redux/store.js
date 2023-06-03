import { createStore } from 'redux';
import {SHOW} from './actions';



const initialState = {};


const MarkdownReducer = (store = initialState, action) => {
    switch (action.type)
    {
        case SHOW: return {};
        
        default: return store;
      }
}

const store = createStore(MarkdownReducer);

export default store;