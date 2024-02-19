import React, {useContext} from "react";
import MyContext from './MyContext'; // Annahme: MyContext ist ein Context Objekt

function MyComponent() {
    const value = useContext(MyContext);

    return <div>value</div>;
}