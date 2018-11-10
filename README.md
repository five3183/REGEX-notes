Notes on REGEX

Regular Expressions : used to describe a pattern of characters.

REGEX functions

   exec() - return a result in an array or null
      return the expression, the index that it starts at, and the string
      if it does not exist, it returns null
   
   test() - returns true of false if there is a match

   match() - return restult array or null

   search() - return index of the first match, if not found returns -1

   replace() - return new string with some or all matches of a pattern

REGEX flags
   FLAGS - they go after the end backslash and apply to everything inside the backslash
   
         i - case insensitive
         g - global search. This will search the entire string for a match


Metacharacter Symbols

   ^ - First letter must match what follows the carrot
   $ - Last letter must match what is before the money sign
   . - Single wild card: Matches one and only one characeter in its position
   * - Multi widl card: Matches any character(s) infinite amout of times
   ? - Optional character. Lists an option character  
         Example: /gre?a?y/ will match gry, gray and grey will match
   \ - Escape character.
   + - looks at all characters

Brackets [] - Character sets

   brackets account for 1 character.  It can be specific or a range.
      Example: /gr[ae]y/      will only matches gray or grey
               /[a-z]rey/     [Any lower case letter] + rey
               /[A-z a-z]rey/ [Any letter any case A-Z] + rey
               /[0-9]rey/     [Any digit] + rey


Braces {} - Quantifiers

   The braces follow the trageted character.  With the amount of occurances or range of occurances inside the brace
      Example: /Hel{2}o/      Will match Hello
               /Hel{2,4}o/i   {A range of occurances} Matches hello helllo and hellllo
               /Hel{2,}o/i    {occurance,} The targeted letter must happen at least as many times.

Parentheses () - Grouping

   Used to specify order or operations in REGEX
      Example:  /^([0-9]x){3}$/     (Inside looked at first then outside is applied)  Matches 3x3x3x only

Shorthand Character Classes

   \w -  Checkes string for a number, letter or underscore
   \W -  Checkes for what is not included in \w !@#$%^&*
   \d -  Checks for a digit
   \D -  Checks for non-digit
   \s -  Checks for white space 
   \S -  Checks for non-white space 
   \b -  Word boundry: checks for exact characters placed before \


Assertions
   x(?=y) - Will match only if x is followed by y
   x(?!y) - Will match only if x is not followed by y 
