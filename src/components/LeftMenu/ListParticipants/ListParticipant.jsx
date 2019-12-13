import React from 'react';

const ListParticipant = (props) => {
     

    const { participantList } = props;
    console.log(participantList)
/*
    const namesRender = participantList.map((name, index) => (
        <div key={index}>
            <a href="#">{name}</a>
        </div>
    ));

    return (
        <div className="leftMenu__nav">
            {namesRender}
        </div>
    ); */
        return (
            <div>
                Фамилия И.О.
            </div>
        )
};

export default ListParticipant;