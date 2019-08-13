/*Objective
In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.
Task
Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:
If , then .
If , then .
If , then .
If , then .
If , then .
If , then .
Input Format
Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.
Constraints

Output Format
The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.
Sample Input 0
11
Sample Output 0
D
Explanation 0
Because , it satisfies the condition  (which corresponds to D). Thus, we return D as our answer.
*/

//Solution

function getGrade(score) {
    let grade;
    if (score <= 30 && score >= 25){
        grade = "A";
        return grade
    }else if ( score <= 25 && score >= 20){
        grade = "B";
        return grade
    }else if ( score <= 20 && score >= 15){
        grade = "C";
        return grade
    }else if ( score <= 15 && score >= 10){
        grade = "D";
        return grade
    }else if ( score <= 10 && score >= 5){
        grade = "E";
        return grade
    }else if ( score <= 5 && score >= 0){
        grade = "F";
        return grade
    }
    return grade;
}