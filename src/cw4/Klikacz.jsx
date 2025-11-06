import React, {useEffect, useState} from 'react';

const Klikacz = () => {
    const [ilosc, setIlosc] = useState(0)
    useEffect(() => {
        console.log(`Klikacz ${ilosc}`)
    });
    return (
        <div>
            <h2>Klikacz</h2>
            <h3>Kliknieto: {ilosc} razu</h3>
            <button onClick={()=>setIlosc(prev => prev+1)}>klik</button>
        </div>
    );
};

export default Klikacz;