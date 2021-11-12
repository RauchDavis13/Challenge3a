# Password Generator Starter Code


## Bootcamp Challenge 3

The purpose of this excercise is to modify given code to create a password generator.  It must meet the Acceptance Criteria given

- Motivation: Apply newly learned Javascript skills to create a working password generator

- Project: Update existing code provided for a workable passward gnerator.  Involves creating functions, variables and objects to allow for defining / creating the variables as outlined in the Acceptance Criteria, passing the newly created password back to HTML and clearing the created array to allow for additional attempts at password creation.

- Problem Solved: Code has been updated to include defining/creating variables that align with Acceptance criteria, sending user back to the start if number of characters are not between 8-128, and if no criteria is selected to populate the Acceptance criteria variables.  Lastly, the array that is created for the password needed to be cleared for more attemps at creating the password.

- Lessons Learned: Many...  I found Javascript very difficult to get a grasp on.  However, slowly was able to work through data flow through functions, function calls, defining variables, conditional statements, arrays and clearning arrays.  The completion of this Challenge has given me a somewhat clearer understanding of the mechanics involved in this process.


## Code
- A variable had to created for length of characters "charLength" to define how long the password would be.  If "charLength" was not between 8-128 characters, it would then alert the user that their number of characters selected was not valid and return the user to the beginning of the user alerts.

- Variables had to be created to define inclusion for Upper Case letters "upperY", Lower Case letters "lowerY", Numbers "numY" and Special Characters "specY".  If one of these variables was not selected, then that variable was not included.  The variables selected as included were then combined into one string "charCode". 

- "charCode" was then used to feed "passChar" and utilize Math object.  Elements from "passChar" were pushed into an array "passArray" based on user selected character length.  Array selection was based of number of characters within the array.  "passArray" was then returned as a string.  This string was then called by variable "password", which was then returned to the HTML .card-header <textarea> as an .innertext value.

- After the password was returned to the .card-header <textarea>, "passArray" and variables had to be cleared to allow for consecutive runs of the program.  "passArray.length" was redefined as zero, and the variables (uppery, lowerY, numY and specY) were redefined as blank.  Otherwise, the previous password string would be added to the newly created string.  Every program pass would build upon the last and layer the previously returned password as part of the newly created password.



## Git

- Successfully cloned started code to local computer and created new 
Git repository (Challenge1A) to hold reworked code and README.md
https://github.com/RauchDavis13/Challenge1A.git

- Successfully created live Git based URL
https://rauchdavis13.github.io/Challenge1A/


## Thank you's....
Matt Kim
Dustin Erwin (TA)
Adam Howard
Amos Han