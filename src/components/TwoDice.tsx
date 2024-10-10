import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(3);
    const [gameResult, setGameResult] = useState<string>("");

    useEffect(() => {
        if (leftDie === 1 && rightDie === 1) {
            setGameResult("You Lose! (Snake Eyes)");
        } else if (leftDie === rightDie) {
            setGameResult("You Win! Matching dice.");
        } else {
            setGameResult("");
        }
    }, [leftDie, rightDie]);

    return (
        <div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>

            <div>
                <Button
                    aria-label="Roll Left"
                    onClick={() => {
                        const newValue = d6();
                        setLeftDie(newValue);
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    aria-label="Roll Right"
                    onClick={() => {
                        const newValue = d6();
                        setRightDie(newValue);
                    }}
                >
                    Roll Right
                </Button>
            </div>

            {gameResult && <p>{gameResult}</p>}
        </div>
    );
}
