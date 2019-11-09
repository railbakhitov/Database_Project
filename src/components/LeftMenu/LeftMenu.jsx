import React from 'react';
import ListParticipant from './ListParticipants/ListParticipant';
import AddParticipant from './AddParticipant/AddParticipant';
import './LeftMenu.scss';

const LeftMenu = ( props ) => {
    return (
        <div className="leftMenu">
            <ListParticipant />
            <AddParticipant />
        </div>
    );
};

export default LeftMenu;