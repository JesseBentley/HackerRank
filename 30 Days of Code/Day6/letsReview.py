# Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. 
# Check out the Tutorial tab for learning materials and an instructional video!
# Task 
# Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated 
# strings on a single line (see the Sample below for more detail).

# Solution

n = int(input())
for i in range(0, n):
    string = input()
    for j in range(0, len(string)):
        if j % 2 == 0:
            print(string[j], end='')
    print(" ", end="")
    for j in range(0, len(string)):
        if j % 2 != 0:
            print(string[j], end='')
    print("")