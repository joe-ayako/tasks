import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>

            {isVisible && <p>The answer is 42.</p>}
        </div>
    );
}
