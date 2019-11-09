function loadTestData() {
    return function(dispatch, getState) {
        fetch('https://api.myjson.com/bins/cye2c')
            .then(function(response) {
                return response.json();
            })
            .then(function(state) {
                dispatch({ type: 'ADD_INPUT_DATA', payload: state });
            });
    };
};
export default loadTestData;

