# Simple Key generator

* This is a simple key generator built completely out of node.js with no dependencies.

# Flags and arguments to run the program with

1. In order to run the program, a flag followed by an argument needs to be passed in every case.
  * These are the flags that may be passed:
    * -g    ||   --generate
      * This flag tells the program to generate a key. This flag takes one argument, which tells the program how many groupings of the key to generate.
    * -d    ||   --decypher
      * This flag tells the program to decypher or decode a current key and see if it matches our algorithm. This flag also takes an argument, which is the key that needs to be decyphered. The key must be entered as 1 string, with a '-' character to separate the groupings.


## Errors

* If the error is in the 100s, then the error belongs to a problem with generating a key, if the error is in the 200s, then the error belongs to a problem with decyphering a valid key
