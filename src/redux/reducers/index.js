function index(state = {}, action = {}) {
    const { payload } = action;

    switch (action.type) {
        case 'ADD_PERSON_DATA':
            return  {...state, participant: [ ...state.participant, payload] };
        default:
            return state;
    }

}

export default index;