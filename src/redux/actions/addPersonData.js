function addPersonData(personData) {
    return {
        type: 'ADD_PERSON_DATA',
        payload: {
            firstName: personData.firstName,
            lastName: personData.lastName,
            middleName: personData.middleName,
            telephone: personData.telephone,
            position: personData.position,
            email: personData.email,
            university: personData.university,
            department: personData.department,
            status: personData.status,
            dateRegistration: personData.registration
        }
    }
}