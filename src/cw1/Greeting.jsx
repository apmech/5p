import React from 'react';

const Greeting = (props) => {

    return (
        <div>
            <h3>Elo {props.imie} - {props.wiek} lat.</h3>
        </div>
    );
};

export default Greeting;