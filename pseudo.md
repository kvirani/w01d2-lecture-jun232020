HALP

PROBLEM:
> Write a node program/app/script/software program that takes in an unlimited number of command line arguments, 
goes through each and prints out the sum of them.

SOLUTION:

numbers = command line args
clean numbers to have just the numbers (remove first two items in Array)

total = 0 

for each number in numbers: 
  - increase total by number (total = total + number)

output total

NOTES:

- sum the numbers ~~AND output to the screen~~
- Implement with function `sum(array of numbers)` => `total`
  - Instead of outputting the total, by returning it, the caller can decide what to do with it
  - The function does not ASSUME to know what the total is FOR
  - Therefore it is more general purpose and can be used elsewhere in the future

IMPLEMENTATION NOTES:

- Work incrementally
- Small steps that are testable as we go
- Small amounts of debugging vs all at the end
  - Error Driven Development 
    - Makes you think about errors and therefore avoid more of them for users
    - Better understand what each step does
    - More familiarity with errors in that ecosystem (language, libraries, etc)
    - More debugging means you're honing that skill
    - Easier debugging because its in smaller steps/sizes
    - Helps us confirm our mental model of how the thing (language, etc) works
  - Cause errors first, then solve that error