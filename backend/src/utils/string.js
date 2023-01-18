const split = (string, separator, index) => {
    const stringSplitted = string.split(separator);
    if (index >= 0)
        return stringSplitted[index];
    // index will be negative so + with - will be -
    // -1 -> stringSplitted.length - 1
    return stringSplitted[stringSplitted.length + index];
}

module.exports = { split }