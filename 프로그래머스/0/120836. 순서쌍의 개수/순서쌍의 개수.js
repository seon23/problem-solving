
const solution = (n) => {
    let ret = 0; 
    for (let i = 1; i < Math.sqrt(n); i += 1) {
        if (n % i === 0) ret += 2;
    }
    
    return Math.sqrt(n) % 1 === 0 ? ret += 1: ret;
};