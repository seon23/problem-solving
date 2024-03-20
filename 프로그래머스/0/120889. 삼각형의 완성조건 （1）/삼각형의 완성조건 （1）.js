const solution = (slides) => {
    const sorted = slides.sort((a, b) => a - b);
    return sorted[2] < (sorted[0] + sorted[1]) ? 1 : 2;
}