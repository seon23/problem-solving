process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const [a, b] = [Number(n[0]), Number(n[1])];
    for (let i = 0; i < b; i += 1) {
        console.log('*'.repeat(a));
    }
});