// Objective
// Today, we're practicing bitwise operations. Check the attached tutorial for more details.
// Task
// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), 
// in sequence  that is also less than a given integer, .
// Complete the function in the editor so that given  and , it returns the maximum .
// Note: The  symbol represents the bitwise AND operator.

//Solution

function getMaxLessThanK(n, k) {
    let m = 0;
    let c = -1;
    for (let i = 1; i < n; i++){
        for (let j = i + 1; j <= n; j++){
            c = i & j;
            if (c < k && c > m) {
                m = c
            }
        }
    } 
    return m;
}