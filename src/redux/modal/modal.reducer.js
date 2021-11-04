import { ModalActionTypes } from "./modal.types";

const INITIAL_STATE = {
    isModal: false,
}


const modalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ModalActionTypes.TOGGLE_MODEL:
            return {
                ...state,
                isModal: !state.isModal
            }
        default:
            return state
    }
}

export default modalReducer;
