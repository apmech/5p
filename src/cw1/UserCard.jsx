import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            Nazywasz się {props.imie}, masz {props.wiek} lat i twoja miejscowość to {props.miasto}.
        </div>
    );
};

export default UserCard;