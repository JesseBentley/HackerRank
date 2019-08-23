// Complete the function in the editor below by returning a RegExp object, , 
// that matches any string  that begins and ends with the same vowel. 
// Recall that the English vowels are a, e, i, o, and u.

// Solution

return new RegExp(/^([aeiou]).*\1$/);