function solution(hp) {
    let [left, num] = [hp, 0];
    
    for (const power of [5, 3, 1]) {
        if (left % power === 0) return num + (left / power);
        [left, num] = [left % power, num + parseInt(left / power)];
    }
    
    return num;
}