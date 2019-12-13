import React from 'react';
import ListParticipant from './ListParticipants/ListParticipant';
import AddParticipant from './AddParticipant/AddParticipant';
import './LeftMenu.scss';
import { connect } from 'react-redux';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="leftMenu">
                <ListParticipant participantList={this.props} />
                <AddParticipant />
            </div>
        );
    }
};

function msp(state) {
    return {
        'partisipantList': state.participantList
    }
}

function mdp(dispatch) {

}

export default connect(msp,mdp)(LeftMenu);