var msg = document.getElementById("msg")
function lifeInWeeks(age) {
    var age = parseInt(prompt('Enter your age'));
    var years = 90 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    var output = "You have " + days + " days, " + weeks + " weeks " + " and " + months + " months left if you live until 90 years old.";
   
    console.log(output);
    return output;
    }
    var yourAge = lifeInWeeks();
    msg.innerHTML = yourAge;
