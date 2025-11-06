import React, {useEffect} from 'react';

const Informacje = (props) => {
    useEffect(() => {
        console.log(`Nowa wiadomosc: ${props.info}`)
    }, [props.info]);
    return (
        <div>

        </div>
    );
};

export default Informacje;