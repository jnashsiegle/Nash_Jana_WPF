/**
 * Jana Nash-Siegle
 * 9/7/2014
 * WPF
 *Conditionals: Assignment - Personal
 *
 * **/

//alert("testing");

var gender = prompt("Are you male or female?");  //check for gender

console.log("You are " + gender + ".");
if(gender === ""){
    var gender;
    gender = prompt("You forgot to input something!"); //checking for empty string, re-running prompt
       console.log("You are " + gender + ".");
}

var weight = prompt("How much do you weight?");  //Ask for weight
console.log("You weigh " + weight + ".");
if(weight === ""){
    var weight;
    weight = prompt("You forgot to input something!");  // checking for empty string, re-running prompt
        console.log("You weigh " + weight + ".");
}

var height = prompt("How tall are you in inches?");
console.log("You are " + height + " inches tall.");
if(height === ""){
    var height;
    height = prompt("You forgot to input something!"); // checking for empty string, re-running prompt
        console.log("You are " + height + " inches tall.");
}

var mWeight = weight * .45;  //converting the pounds to kg
console.log("The metric conversion of the weight is " + mWeight);

var mHeight = height * .025;  //converting the inches to meters
console.log("The metric conversion of the height is " + mHeight);

var sHeight = pow(height, 2);  //squaring the height
console.log("The square of the height is " + sHeight);

var result = mWeight / sHeight; //dividing mWeight by sHeight gives us the BMI
console.log("The BMI of the weight and height is " + result + ".");