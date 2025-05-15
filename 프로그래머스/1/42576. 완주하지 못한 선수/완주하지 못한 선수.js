
const solution = (participant, completion) => {
    const finishers = {};
    
    for (let finisher of completion) {
        if (!finishers[finisher]) finishers[finisher] = 1;
        else finishers[finisher] += 1;
    }

    for (let runner of participant) {
        if (!finishers[runner]) return runner;
        finishers[runner] -= 1;
    }
}