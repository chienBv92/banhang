import * as types from '../constants/ActionType';
import * as Message from '../constants/Message';

var initState = Message.MSG_WELCOME;

const message = (state = initState, action) => {
    var index = -1;
    switch (action.type) {
        case types.CHANGE_MESSAGE:
        return action.message;

        default: return [...state];
    }
}


export default message;