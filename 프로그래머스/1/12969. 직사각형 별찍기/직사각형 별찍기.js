process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map((v) => Number(v));
    for (let i = 0; i < m; i += 1) {
        console.log('*'.repeat(n));
    }
});