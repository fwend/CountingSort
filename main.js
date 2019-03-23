const arr = [2, 5, 3, 0, 2, 3, 0, 3];

const countingSort = (a, range = 10) => {
    const result = Array(a.length);
    const freq = Array(range).fill(0);

    for (let i = 0; i < a.length; i++) {
        const val = a[i];
        freq[val]++;
    }

    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }

    for (let i = a.length - 1; i >= 0; i--) {
        const val = a[i];
        const pos = freq[val] - 1;
        result[pos] = val;
        freq[val]--;
    }

    return result;
};

console.log(countingSort(arr, 6));
