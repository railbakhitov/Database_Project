import React from 'react';
import { NavLink } from 'react-router-dom';

class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="leftMenu__button">
                <NavLink to='/'>Добавить участника</NavLink>
            </div>
        );
    }

};

export default AddParticipant;