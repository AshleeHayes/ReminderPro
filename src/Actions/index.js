import { ADD_REMINDER } from '../Constants';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        // type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
}