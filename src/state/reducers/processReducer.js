export const ProcessReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_TCKT': return {...state, code: payload};
        default: return state;
    }
}