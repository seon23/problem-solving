const discounts = [
    [500000, 20],
    [300000, 10],
    [100000, 5]
];

const solution = price => {
    for ([p, discount] of discounts) {
        if (price >= p) return Math.floor(price * (1 - discount / 100));
    }
    return price;
}