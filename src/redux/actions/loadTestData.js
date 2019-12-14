import axios from 'axios';

function loadTestData() {
    return function(dispatch, getState) {
        axios.get('https://database-knrtu.firebaseio.com/data.json')
            .then(function(response) {
                dispatch({ type: 'ADD_INPUT_DATA', payload: response.data });
            });
    };
};
export default loadTestData;

