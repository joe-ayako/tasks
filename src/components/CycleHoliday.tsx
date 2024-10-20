import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year"
    | "Valentine's Day"
    | "Halloween"
    | "Thanksgiving"
    | "Christmas";

const holidaysAlphabetical: Holiday[] = [
    "Christmas",
    "Halloween",
    "New Year",
    "Thanksgiving",
    "Valentine's Day",
];

const holidaysByYear: Holiday[] = [
    "New Year",
    "Valentine's Day",
    "Halloween",
    "Thanksgiving",
    "Christmas",
];

const holidayEmojis: Record<Holiday, string> = {
    "New Year": "🎉",
    "Valentine's Day": "💖",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    Christmas: "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Year");

    const cycleAlphabetically = () => {
        const currentIndex = holidaysAlphabetical.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysAlphabetical.length;
        setCurrentHoliday(holidaysAlphabetical[nextIndex]);
    };

    const cycleByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {holidayEmojis[currentHoliday]}</div>

            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>

            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
