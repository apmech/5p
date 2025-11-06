import React, {useEffect} from 'react';

const Rysowanie = () => {
    useEffect(() => {
        console.log("Rendered ale raz")
    }, []);
    return (
        <div>

        </div>
    );
};

export default Rysowanie;