import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    const handleDouble = () => {
        setValue((prevValue) => prevValue * 2);
    };

    const handleHalve = () => {
        setValue((prevValue) => prevValue / 2); // Change from * 0.5 to / 2
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
