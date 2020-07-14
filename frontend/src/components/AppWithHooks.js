import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {

    const [bowls, setBowls] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [placeholder, setPlaceholder] = useState("Loading");

    useEffect(() => {
        getBowls();
    }, []);

    const getBowls = () => {
        fetch("api/bowl")
            .then(response => {
                if (response.status > 400) {
                    setPlaceholder("Something went wrong!")
                }
                return response.json();
            })
            .then(data => {
                setBowls(data)
                setLoaded(true)
            });
    }

    return (
        <ul>
            {bowls.map(bowl => {
                return (
                    <li key={bowl.id}>
                        {bowl.name} - {bowl.style} - {bowl.comment}
                    </li>
                );
            })}
        </ul>
    );
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);