import * as actionTypes from '../actions/actionTypes'

export default ( state = [], action ) => {
    switch ( action.type ) {
        case actionTypes.CREATE_NEW_CONTACT:
            return [
                ...state,
                Object.assign( {}, action.contact )
            ]
        case actionTypes.REMOVE_CONTACT:
            return state.filter( ( data, i ) => {
                if ( i !== action.id ) {
                    return true
                } else {
                    return false
                }
            } )
        case actionTypes.EDIT_CONTACT:
            // state.findIndex( action.contactIndex.index, n => {
            //     console.log( n )
            // } )
            return state
        default:
            return state
    }
}