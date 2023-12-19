/**JavaScript Web program for checking whether the entered number is even or odd.
* using Node.js version 20.10.0
* @version 1.0
* @license MIT License
* @author Arman Azarnik
* contact me at : armanazarnik@gmail.com
*/

/**boolean function to check whether the parameter number is even or not.
* @param {number} number - the input parameter number to check.
* @returns {boolean} true if the number is an even number and false in it is an odd number.
* @example
* is_Even_Number_Checker(55); // Output: false
* is_Even_Number_Checker(12); // Output: true
*/
function is_Even_Number_Checker(number){
    return number % 2 == 0;
}

/**function to call is_Even_Number_Checker and alert whether the entered number is even or odd.
*/
function is_Even_Or_Odd_Number_Alerter(){
    if(is_Even_Number_Checker(input_Number)){
        alert(input_Number + " is an even number.")
    }else{
        alert(input_Number + " is an odd number.")
    }
}

while(true){
    var input_Number = prompt("Please enter a number to check whether it's even or odd.")
    input_Number = Number(input_Number)
    // explicit casting
    
    is_Even_Or_Odd_Number_Alerter(input_Number)
}