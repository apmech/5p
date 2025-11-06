import React, {useEffect, useState} from 'react';

const Efekty = () => {
    const [tekst, setTekst] = useState("");
    useEffect(() => {
        console.log("Rendered komp")
        });

    return (
        <div>
            <h2>HAAHA22 {tekst}</h2>
            <button onClick={()=>setTekst("HELL")}>AA</button>
        </div>
    );
};

export default Efekty;