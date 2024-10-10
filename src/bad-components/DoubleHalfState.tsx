import React, { useState } from "react";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Initialize state with 10

    const handleDouble = () => {
        setDhValue((prevValue) => prevValue * 2); // Double the current value
    };

    const handleHalve = () => {
        setDhValue((prevValue) => prevValue / 2); // Halve the current value
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleHalve}>Halve</button>
        </div>
    );
}
