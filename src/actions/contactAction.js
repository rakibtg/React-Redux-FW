import * as actionTypes from './actionTypes'

export const createContact = contact => {
    return {
        type: actionTypes.CREATE_NEW_CONTACT,
        contact: contact
    }
}

export const deleteContact = id => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}

export const editContactForm = index => {
    return {
        type            : actionTypes.EDIT_CONTACT_FORM,
        contactIndex    : index
    }
}

export const editContact = index => {
    return {
        type: actionTypes.EDIT_CONTACT,
        contactIndex: index
    }
}