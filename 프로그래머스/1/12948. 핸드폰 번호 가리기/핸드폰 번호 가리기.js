const replacer = (match, idx, str) => {
    return idx < str.length - 4 ? '*' : match;
}
const solution = (phone_number) => {
    return phone_number.replace(/[0-9]/g, replacer);
}