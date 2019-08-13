/*
Observe the following:
Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .
*/

// Solution

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let consonants = "";
    for(let i = 0; i < s.length; i++)
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }else{
            consonants += s[i] + '\n';
        }
    console.log(consonants.trim());
}