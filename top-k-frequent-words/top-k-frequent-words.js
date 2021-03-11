/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map;
    for (const word of words) {
        if (!map.has(word)) map.set(word, 1);
        else map.set(word, map.get(word) + 1);
    }
    
    return [...map.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, k)
        .map(x => x[0]);
};