const solution = (phone_number) => {
    return [...phone_number].map((a, i) => i < phone_number.length - 4 ? '*' : a).join('');
}