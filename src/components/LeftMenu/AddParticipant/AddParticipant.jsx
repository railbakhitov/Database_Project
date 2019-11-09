import React from 'react';

class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="leftMenu__button">
                <a>Добавить участника</a>
            </div>
        );
    }

};

export default AddParticipant;