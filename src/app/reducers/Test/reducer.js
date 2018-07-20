import { combineReducers } from 'redux';

import {
    DICTIONARY_ACTIONS
} from './actions';

export default function DictionaryReducer(state = {
    data: {

    },
    edit: { isLoading: false }
}, action) {
    switch (action.type) {
        case DICTIONARY_ACTIONS.ADD_DICTIONARY_FETCH.SUCCESS:
            {
                console.log('kupa');
                return state;
            }
       
        default:
            {
                return state;
            }
    }

}