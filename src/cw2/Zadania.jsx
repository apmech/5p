import React, {useState} from 'react';
import {users} from "../data.js";

const Zadania = () => {
    const z1 = users.filter(user => user.city == "Wrocław").map(user => <li key={user.id}>{user.name}</li>)
    const z2 = users.filter(user => user.age < 28).map(user => <li key={user.id}>{user.name}, {user.age}</li>)
    const z3 = users.map(user => user.salary).reduce((acc, salary) => acc+salary,0) / users.length
    const z4 = users.filter(user => user.salary > 6000).map(user => <li key={user.id}>{user.name}</li>)
    const z5 = users.map(({ name, city }) => ({ name,city }));
    const z6 = users.filter(user => user.name.startsWith("M")).map(user => <li key={user.id}>{user.name}, {user.city}, {user.age}</li>)
    const z7 = users.sort((a,b) => (a.age - b.age)).map(user => <tr><th style={{border: "1px solid black"}}>{user.name}</th><th style={{border: "1px solid black"}}>{user.age}</th></tr>)
    const z8 = users.filter(user => user.salary > 5000 && user.salary < 6000).map(user => <li key={user.id}>{user.name}</li>)
    const [tekst, setTekst] = useState("Wrocław");
    const z9 = users.filter(user => user.city == {tekst}).map(user => <li key={user.id}>{user.name}</li>)



    return (
        <div>
            <input type="text" value={tekst} onChange={(e) => setTekst(e.target.value)}/>
            <ul>
                {z9}
            </ul>

            {console.log(z9)}

            {/*<table>
                {z7}
            </table>*/}

        </div>
    );
};

export default Zadania;