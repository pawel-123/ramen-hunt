import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Bowl from "./Bowl";
import BowlForm from "./BowlForm";
import '../index.css';

function App() {

    const [bowls, setBowls] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [placeholder, setPlaceholder] = useState("Loading");

    // gets bowls when mounting and when bowls change
    useEffect(() => {
        getBowls();
    }, [loaded]);

    const getBowls = () => {
        // bowls ordered by descending rating
        fetch("api/bowl/?ordering=-date_added")
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
        <div className="apptest">
            <Header />
            <BowlForm
                setLoaded={setLoaded}
            />
            <div className="bowl-list">
                <h3>Highest rated bowls</h3>
                {bowls.map(bowl => (
                    <Bowl
                        key={bowl.id}
                        name={bowl.name}
                        style={bowl.style}
                        comment={bowl.comment}
                        rating={bowl.rating}
                        username={bowl.author.username}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);