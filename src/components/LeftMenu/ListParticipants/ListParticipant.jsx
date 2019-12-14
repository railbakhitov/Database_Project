import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../../../redux/store';

class ListParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOnRef = this.handleClickOnRef.bind(this);
    }

    handleClickOnRef(e) {
        const id= e.target.name;
        store.dispatch({ type: 'CURRENT_PARTICIPANT', payload: id });
    }

    render() {

        const { names, ids, search } = this.props;
        const namesRender = names.map((name, index) => {

            const lastName = name.split(' ')[0];
            const renderElement = (
                <div key={index}>
                    <NavLink
                        to={`/${ids[index]}`}
                        onClick={this.handleClickOnRef}
                        name={`${ids[index]}`}
                    >
                        {name}
                    </NavLink>
                </div>
            )

            if (search === null) {
                return renderElement;
            }

            if (lastName === search) {
                return renderElement
            }
        });

        return (
            <div className="leftMenu__nav">
                <span style={{ fontWeight: 'bold' }}>Список участников:</span>
                {namesRender}
            </div>
        )
    }
};

function msp(state) {
    const { participantList, personData, searchParticipant } = state;
    const idsList = personData.map(person => Object.keys(person).join());

    return {
        'names': participantList,
        'ids': idsList,
        'search': searchParticipant
    }
}

export default connect(msp)(ListParticipant);