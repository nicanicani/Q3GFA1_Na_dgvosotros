//1.
function no1() {
    // Define the variables
    var nickname = "Nica";
    var height = 61; // in inches
    var weight = 52; // in kg

    // Convert height to feet and inches
    var feet = Math.floor(height / 12);
    var inches = height % 12;

    // Convert weight to pounds
    var pounds = weight * 2.20462;

    // Display the information
    alert("Name: " + nickname + "\nHeight: " + feet + "'" + inches + "\"" + "\nWeight: " + pounds.toFixed(3) + " lbs");
}

//2.
function no2(){
    // Get user inputs using prompt()
    var firstName = prompt("Please enter your first name:");
    var lastName = prompt("Please enter your last name:");
    var birthYear = parseInt(prompt("Please enter your birth year:"));

    // Calculate the age (estimate)
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    // Display the information using document.getElementById
    document.getElementById("output1").innerHTML = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";
}


// Item #3
function no3(){
    // Define the variables
    var nickname = "Nica";
    var height = 61; // in inches
    var weight = 52; // in kg
    
    // Convert height to feet and inches
    var feet = Math.floor(height / 12);
    var inches = height % 12;
    
    // Convert weight to pounds
    var pounds = weight * 2.20462;
    
    // Ask the user for their consent to share their personal information
    if (confirm("Do you agree to share your personal information with our site?")) {
    // Display the information
    console.log("Name: " + nickname + "\nHeight: " + feet + "'" + inches + "\"" + "\nWeight: " + pounds.toFixed(3) + " lbs");
    } else {
   console.log("User does not wish to share his/her information.");
    }
}