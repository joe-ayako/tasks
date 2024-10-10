import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ChangeColor({ setColorIndex }: ChangeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

interface ColorPreviewProps {
    color: string;
}

function ColorPreview({ color }: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setColorIndex={setColorIndex} />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}
