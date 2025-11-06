import React, {useEffect, useState} from 'react';

const Licznik = () => {
    const [licznik ,setLicznik] = useState(0);
    const [komunikat ,setKomunikat] = useState("");
    useEffect(() => {
        if(licznik>10){
            setKomunikat("Przekroczono limit")
        } else setKomunikat("");
    }, [licznik]);
    return (
        <div>
            <h2>licznik</h2>
            <button onClick={()=> setLicznik(x=>x+1)}>+++</button>
            {
                komunikat && <p style={{color:"red"}}>{komunikat}</p>
            }
        </div>
    );
};

export default Licznik;