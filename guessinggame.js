var p;
p = 0;

while (p === 0) {
    /* This program challenges the user to guess a randomly generated number
     * within a range chosen by the user. Basic user input is validated to 
     * ensure numbers are entered and there are no guessing range violations
     * (such as choosing a number outside the high or low boundary of the range). 
     */
    
    var intMax, intMin, intRandom, intGuess, intCount;
    
    /* the following section prompts the user to enter the low number of their guessing range
     * and then validates that the user entered an actual number and make sure that the
     * number is at least 0.
    */
    
    intMin = parseInt(prompt("Choose the lowest number (but not lower than 0) in your guessing game: "));
    
    while (isNaN(intMin) || intMin<0)
    {
        intMin = parseInt(prompt("I'm sorry, but your lowest number choice is invalid.\n" + "Please choose the lowest number (but no lower than 0) in your guessing game: "));
    }
    
    
    /* the following section prompts the user to enter the high number of their guessing range
     * and then validates that the user entered an actual number and make sure that the
     * number is at least 2 more than the minimum (so that there is some guessing involved).
    */
    
    intMax = parseInt(prompt("Choose the highest number (at least two numbers higher than your lowest number) in your guessing game: "));
    
    while (isNaN(intMax) || intMax === intMin || intMax === intMin+1)
    {
        intMax = parseInt(prompt("I'm sorry, but your highest number choice is invalid.\n" + "Please choose the highest number (at least two numbers higher than your lowest number) in your guessing game: "));
    }
    
    
    /*The following line of code generates the random number to be used in the guessing game.
     * Math.floor rounds the random number down to the nearest integer
     * Math.random() generates a random number between 0 and 1
     * the portion of (intMax-intMin +1) provides the range of random values
     * the addition of + intMin provides the floor for the random number 
     */
    intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);
    
    
    // set the loop counter
    
    intCount = 1
    
    /* the following section prompts the user to enter their guess
     * and then validates that the user entered an actual number and makes sure that the
     * number is between the allowed max and min number choices.
    */
    
    intGuess = parseInt(prompt("Choose a number between your lowest and highest selected numbers: "));
    
    while (isNaN(intGuess) || intGuess <= intMin || intGuess >= intMax)
    {
        intGuess = parseInt(prompt("I'm sorry, but your guess is incorrect.\n" + "Please choose a different number: "));
    }
    
    
    /* The following section provides the main loop and logic for the program.
     * The user's guess is compared to the randomly generated number and feedback
     * is given based upon whether the guess is higher or lower. The loop exits when
     * the user chooses the correct number. Each time through the loop updates the loop counter.
     */
    while (intGuess != intRandom) {
        if (intGuess < intRandom) {
            //alert("Your guess is too low."));
            intGuess = parseInt(prompt("Your guess is too low.\n" + "Please choose a different number: "));
            while (isNaN(intGuess) || intGuess <= intMin || intGuess >= intMax) {
                intGuess = parseInt(prompt("That guess is incorrect.\n" + "Please choose a different number: "));
            }
        } else {
            //alert("Your guess is too high."));
            intGuess = parseInt(prompt("Your guess is too high.\n" + "Please choose a different number: "));
            while (isNaN(intGuess) || intGuess <= intMin || intGuess >= intMax) {
                intGuess = parseInt(prompt("That guess is incorrect.\n" + "Please choose a different number: "));
            }
        }
        intCount++;
    }
    
    // provides final output upon successful guessing
    alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
            " and it only took you " + intCount + " attempts!");
    
    p = parseInt(prompt("Would you like to play again? Enter 0 for yes, 1 for no."));
}