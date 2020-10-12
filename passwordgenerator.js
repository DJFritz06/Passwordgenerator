var passwords = 0; 
var password = ("");

document.addEventListener("keydown", event => {
    if (event.keyCode == 32) {
        
        createPassword();
    }
})

class Password {
    constructor(length) {
        this.length = length;
    }
    create() {
        console.log("Step 2...");
        var symboles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (var i = 0; i < this.length; i++) {
            var randomNumber = Math.floor(Math.random()*35);
            var newSymbol = symboles[randomNumber];
            password += newSymbol;
            console.log("Adding digits: " + newSymbol);
        }
        return password;
    }
}

function createPassword() {
    password =("");
    passwords++;
    console.log("Step 1...");
    var digitsLenght = prompt("How many digits?", "4 - 16");
    var newPassword = new Password(digitsLenght).create();
    console.log("Password " + passwords + ": " + newPassword);
    alert("New password: " + newPassword);
}