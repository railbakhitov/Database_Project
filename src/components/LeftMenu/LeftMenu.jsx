import React from 'react';
import ListParticipant from './ListParticipants/ListParticipant';
import AddParticipant from './AddParticipant/AddParticipant';
import './LeftMenu.scss';
import SearchParticipant from './SearchParticipant/SearchParticipant';

const LeftMenu = () => (
    <div className="leftMenu">
        <SearchParticipant />
        <ListParticipant />
        <AddParticipant />
    </div>
);

export default LeftMenu;