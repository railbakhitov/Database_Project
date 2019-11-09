import React from 'react';
import './Person.scss';
import PersonalData from './PersonalData/PersonalData';

const Person = ( props ) => {
    return (
        <div className="person">
            <PersonalData />
        </div>
    )
};

export default Person;