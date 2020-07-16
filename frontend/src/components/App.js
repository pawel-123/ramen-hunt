import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Bowl from "./Bowl";
import BowlForm from "./BowlForm";

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
        fetch("api/bowl/?ordering=-rating")
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
        <div>
            <Header />
            <BowlForm
                onLoadedChange={setLoaded}
            />
            {bowls.map(bowl => (
                <Bowl
                    key={bowl.id}
                    name={bowl.name}
                    style={bowl.style}
                    comment={bowl.comment}
                    rating={bowl.rating}
                />
            ))}
        </div>
    );
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);