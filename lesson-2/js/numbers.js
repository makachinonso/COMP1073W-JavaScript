/* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
        let output = document.querySelector('p');
        // Note - there are also different number systems: binary, octal, and hexadecimal
        let myInt = 10;
        let myFloat = 5.6879;
        let typeTest = typeof(myFloat);
        output.textContent = typeTest;
        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
        let step2a = 5 % 3;
        output.textContent = step2a;

        // Try declaring and initializing a couple of variables as numbers
            let num1 = 90;
            let num2 = 50;
            let step2b = (90+50)* 5 - 25;
            output.textContent = step2b;

        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
            let step3a = 5;
            let preIncrement = ++step3a;
            console.log(++step3a);
            let postIncrement = step3a++;
            console.log(postIncrement);

        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
        step4a =5;
        step4a /= 2; //step4a = step4a/2
        output.textContent = step4a;

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
            let a = 2;
            let c = '2'
            console.log( a==c);
            console.log( a===c);