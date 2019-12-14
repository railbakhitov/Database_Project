function searchParticipant(lastName) {
    return {
        type: 'SEARCH_PARTICIPANT',
        payload: lastName
    }
}

export default searchParticipant;