import React, {useEffect, useState} from 'react';

const StatusNet = () => {
    const [status, setStatus] = useState(navigator.onLine)
    useEffect(() => {
        window.addEventListener('online', ()=>setStatus((false)))
        window.addEventListener('offline', ()=>setStatus((true)))
        return()=>
        {
            window.addEventListener('online', ()=>setStatus((false)))
            window.addEventListener('offline', ()=>setStatus((true)))
        }
    });
    return (
        <div>
            <h2>Status:
                {
                    status ? <p style={{color: "green"}}>Online</p> : <p style={{color: "red"}}>Offline</p>
                }
            </h2>
        </div>
    );
};

export default StatusNet;