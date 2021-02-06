module.exports = function toReadable(number) {
    const strNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    const str = String(number);
    const len = str.length;
    const isInt10 = Number.isInteger(number/10);
    const isInt100 = Number.isInteger(number/100);
    if(number <= 20) return strNum[number]
    if (len === 2 && isInt10) return strNum[number];
    if (len === 2 && number < 100 && number > 20) return strNum[Math.floor(number/10) * 10] + " " + strNum[str[1]];
    if (len === 3 && isInt100) return strNum[str[0]] + " " + strNum[100];
    if (len === 3 && isInt10) return strNum[str[0]] + " " + strNum[100] + " " + strNum[+str[1] * 10];
    if (len === 3 && number <= str[0]+20) return strNum[str[0]] + " " + strNum[100] + " " + strNum[+str.slice(1)];
    if (len === 3 && number > str[0]+20) return strNum[str[0]] + " " + strNum[100] + " " + strNum[+str[1] * 10] + " " + strNum[+str[2]];
};
