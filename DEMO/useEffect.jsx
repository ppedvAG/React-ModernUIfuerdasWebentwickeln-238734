import React, {useEffect} from 'react';

function MyComponent() {
    
    useEffect(() => {
        console.log('komponente wurde gerendert');
    });

    useEffect(() => {
        console.log('komponente wurde 2x gerendert');
    }, [prop1, prop2]);


    useEffect(() => {
        console.log('Code, der nach dem Rendern ausgeführt wird');
    // Aufräumfunktion
        return ( ) => {
            console.log('Aufräumen...');
        };
    }, []);


    return <div>Meine Functional Component</div>
}