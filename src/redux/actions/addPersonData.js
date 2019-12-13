function addPersonData(personData) {
    return {
        type: 'ADD_PERSON_DATA',
        payload: {
            dateRegistration: personData.dateRegistration,
            department: personData.department,
            email: personData.email,
            firstName: personData.firstName,
            lastName: personData.lastName,
            middleName: personData.middleName,
            position: personData.position,
            status: personData.status,
            telephone: personData.telephone,
            university: personData.university,
        }
    }
}

export default addPersonData;