# Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

# Solution
import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input())

    arr = str(input()).split(" ")
    arr.reverse()

    for n in arr:
        print(n + " ", end="")