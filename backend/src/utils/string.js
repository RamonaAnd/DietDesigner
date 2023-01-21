const split = (string, separator, index) => {
    const stringSplitted = string.split(separator);
    if (index >= 0)
        return stringSplitted[index];
    // index will be negative so + with - will be -
    // -1 -> stringSplitted.length - 1
    return stringSplitted[stringSplitted.length + index];
}

const titleCase = (string) => {
    string = string.replace(/-/g," ");
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { split, titleCase }