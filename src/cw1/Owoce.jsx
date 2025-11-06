import React from 'react';

const Owoce = () => {
    const fruits = ["truskawka","malina","wisnia"]
    return (
        <div>
            <ul>
                {
                    fruits.map((owoc, index) => <li key={index}>{owoc}</li>)
                }
            </ul>
        </div>
    );
};

export default Owoce;