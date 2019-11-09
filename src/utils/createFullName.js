const createFullName = (firstName, lastName, middleName) => {
    const firstSymbolFirstName = firstName.split('')[0];
    const firstSymbolMiddleName = middleName.split('')[0];
    const result = `${lastName} ${firstSymbolFirstName}.${firstSymbolMiddleName}.`;
    return result;
}

export default createFullName;