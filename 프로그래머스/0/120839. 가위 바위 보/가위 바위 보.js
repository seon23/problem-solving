const replacer = match => {
    const pairs = {2: 0, 0: 5, 5: 2};
    return pairs[match];
};

const solution = rsp => rsp.replace(/[205]/g, replacer);