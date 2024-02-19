import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );

};

function Greeting() {
    const [message, setMessage] = useState();

    return (
        <div>
            <p>{message}</p>
            <button onClick={() => setMessage('Guten Tag')}>Ändere Nachricht</button>
        </div>
    );
};