/*Objective
In this challenge, we learn about switch statements. Check out the attached tutorial for more details.
Task
Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).
Input Format
Stub code in the editor reads a single string denoting  from stdin.
Constraints
, where  is the length of .
String  contains lowercase English alphabetic letters (i.e., a through z) only.
Output Format
Return either A, B, C, or D according to the criteria given above.
Sample Input 0
adfgt
Sample Output 0
A
Explanation 0
The first character of string  is a. Because the given criteria stipulate that we print A any time the first character is in , we return A as our answer.
*/

// Solution

function getLetter(s) {
    let letter;
    switch(true){
        case 'aeiou'.includes(s[0]):
            letter = 'A'
            break;
        case 'bcdefg'.includes(s[0]):
            letter = 'B'
            break;
        case 'hkjlm'.includes(s[0]):
            letter = 'C'
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D'
            break;
    }
    return letter;
}
