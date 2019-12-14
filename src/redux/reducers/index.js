import createFullName from "../../utils/createFullName";

function index(state = {}, action = {}) {
    const { payload } = action;
    
    console.log('action', action);

    switch (action.type) {
        case 'ADD_PERSON_DATA': {
            const { firstName, lastName, middleName } = payload;
            const fullName = createFullName(firstName, lastName, middleName);

            return  { 
                ...state, 
                participantList: [ ...state.participantList, fullName ], 
                personData: [ ...state.personData, payload ]
            };
        };

        case 'ADD_INPUT_DATA': {
            const ids  = Object.keys(payload);

            const newState = ids.reduce((acc, id) => {

                const personDataOfCurrentId = payload[id];

                const { firstName, lastName, middleName } = personDataOfCurrentId;
                const fullName = createFullName(firstName, lastName, middleName);
                
                return {
                    ...acc,
                    participantList: [ ...acc.participantList, fullName ], 
                    personData: [ ...acc.personData, { [id]: personDataOfCurrentId } ]
                }
            }, state);

            return newState
        };

        case 'SEARCH_PARTICIPANT':
            return { ...state, searchParticipant: payload};

        case 'CURRENT_PARTICIPANT':
            return { ...state, cuurentParticipant: payload};
        
        default:
            return state;
    }

}

export default index;