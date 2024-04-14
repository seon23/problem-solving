const solution = (price, money, count) => {
    const extra = (price * count * (count + 1) / 2) - money;
    return extra > 0 ? extra : 0;
}