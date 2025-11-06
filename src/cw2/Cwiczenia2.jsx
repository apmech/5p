import React from 'react';
import {users} from '../data.js'
const Cwiczenia2 = () => {
    const imiona = users.map(user=> user.name);
    const totalSalary = users.filter(pensja => pensja.salary > 5000).map(user=>user.salary).reduce((acc, salary) => acc+salary,0);
    return (
        <div>
            <ol>
                {
                    users.filter(pensja => pensja.salary > 5000)
                        .map(user => <li key={user.id} style={{color: user.salary >6500? "green": "red"}}>{user.name} {user.salary}</li>)



                }
            </ol>
            <h3>Zarobki pracowników: {totalSalary}</h3>
        </div>
    );
};

export default Cwiczenia2;