/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let firstLast: number[] = [];
    if (numbers.length == 0) {
        return firstLast;
    } else {
        firstLast = [numbers[0], numbers[numbers.length - 1]];
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let dollars = numbers.map((num: string): number => {
        if (isNaN(parseInt(num))) {
            return 0;
        } else {
            return parseInt(num);
        }
    });

    return dollars;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let current: string = "";

    let noSigns = amounts.map((amount: string): number => {
        if (amount[0] === "$") {
            current = amount.substring(1, amount.length);
        } else {
            current = amount;
        }

        if (isNaN(parseInt(current))) {
            return 0;
        } else {
            return parseInt(current);
        }
    });

    return noSigns;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );

    const capitalised = noQuestions.map((message: string): string => {
        if (message[message.length - 1] === "!") {
            return message.toUpperCase();
        } else {
            return message;
        }
    });

    return capitalised;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    words.map((word: string): string => {
        if (word.length < 4) {
            count++;
            return word;
        } else {
            return word;
        }
    });

    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allRGB: boolean = true;
    if (colors.length === 0) {
        return allRGB;
    } else {
        colors.map((color: string): string => {
            if (color !== "red" && color !== "green" && color !== "blue") {
                allRGB = false;
                return color;
            } else {
                return color;
            }
        });
        return allRGB;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let equation: string = "";
    let sum: number = 0;
    addends.map((num: number): number => {
        sum = sum + num;
        equation = equation + num + "+";
        return num;
    });

    if (sum > 0) {
        equation = sum + "=" + equation.substring(0, equation.length - 1);
    } else {
        equation = sum + "=" + sum;
    }

    //console.log(equation);

    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negativeFound: boolean = false;
    let sum: number = 0;
    let position: number = 0;
    let arrayCopy: number[] = [...values];

    const injectedArray = arrayCopy.map((num: number): number => {
        if (num < 0) {
            negativeFound = true;
        }
        if (!negativeFound) {
            sum = sum + num;
            position++;
        }
        return num;
    });

    if (negativeFound) {
        arrayCopy.splice(position + 1, 0, sum);
        console.log(arrayCopy);
        return arrayCopy;
    } else {
        arrayCopy.push(sum);
        console.log(arrayCopy);
        return arrayCopy;
    }
}
