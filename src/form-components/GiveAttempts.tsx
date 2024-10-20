import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{attempts}</div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </button>
            <button
                onClick={() => {
                    if (inputValue !== "") {
                        setAttempts(attempts + parseInt(inputValue, 10));
                    }
                }}
            >
                Gain
            </button>
        </div>
    );
}
