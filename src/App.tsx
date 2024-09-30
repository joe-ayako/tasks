import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Joseph Ayako
            </header>
            <h1> Amazing Header</h1>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>

            <img
                src="https://preview.redd.it/the-pope-drip-v0-de6cf3omoqpa1.jpg?width=640&crop=smart&auto=webp&s=4efaaaee0265a5923e7804af69e62fdac8461b3c"
                alt="Drippy Pope"
            />

            <ul>
                <li>Dogs</li>
                <li>Cats</li>
                <li>Parrots</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <div
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: "#FF0000",
                }}
            ></div>
        </div>
    );
}

export default App;
