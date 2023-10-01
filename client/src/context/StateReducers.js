import StateActions from "./StateActions";

export const initialState = {
    userInfo: undefined,
    newUser: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case StateActions.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.data.userInfo,
            }

        case StateActions.SET_NEW_USER:
            return {
                ...state,
                newUser: action.data.newUser,
            }

        default: 
            return state;
    }
};

export default reducer;