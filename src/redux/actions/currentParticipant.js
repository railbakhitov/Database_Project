function currentParticipant(id) {
    return { 
        type: 'CURRENT_PARTICIPANT',
        payload: id
    }
}

export default currentParticipant;