/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myAge;
        let string;
        let para = document.querySelector('body p');
        

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = 'Shivali Dhaka';
        myAge = 30;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName = 'shivi dhaka';
        console.log(myName);
        myAge = 31;
        string = myName + ', ' + myAge;
        para.textContent = string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse = 6;
        para.textContent = numCourse;

		// Strings (use '' or "")
        let stringCourse = 'Client Side JS';
        para.textContent = stringCourse;

		// Booleans
        let iamalive = true;
        let compare = 6 < 3;
        console.log('The result of comparison is: ' + compare);

		// Arrays
        let myArrays = ['Sarah','Steeve','Melissa'];
        para.textContent = myArrays[1];
        console.log(myArrays[2]);

        let myArrays2 = [20,30,40];
        console.log(myArrays2[2]);
		
		// Objects

        let dog = {fName : 'Simba',breed:'Staffy Mix',color:'Brown'};
        console.log(dog.fName);

		// STEP 5: Typing (JavaScript is a loosely-typed language)
        var myNumber = 500;
        console.log(typeof(myNumber));
        myNumber = false;
        console.log(typeof(myNumber));