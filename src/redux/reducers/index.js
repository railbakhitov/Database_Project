import createFullName from "../../utils/createFullName";

function index(state = {}, action = {}) {
    const { payload } = action;
    console.log('action', action);

    switch (action.type) {
        case 'ADD_PERSON_DATA': {
            const { firstName, lastName, middleName } = payload;
            const fullName = createFullName(firstName, lastName, middleName);
            console.log(' payload this => ', payload);
            return  { 
                ...state, 
                participantList: [ ...state.participantList, fullName ], 
                personData: [ ...state.personData, payload ]
            };
        }
        case 'ADD_INPUT_DATA': {
            const { participantList, personData } = payload;
            return { 
                ...state, 
                participantList,
                personData
            };
        }
        default:
            return state;
    }

}

export default index;