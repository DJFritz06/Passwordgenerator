var passwords = 0; 
var password = "";
var previous2;
var previous1; 
var numberCount = 0;

document.addEventListener("keydown", event => {
    if (event.keyCode == 32 || event.keyCode == 13) {
        
        createPassword();
    }
})

class Password {
    create(length) {
        console.log("Step 2...");
        var symboles = {
            vocals: [
                "a", "e", "i", "o", "u"
            ],
            konsonants: [
                "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"
            ],
            numbers: [
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
            ]
        }
        console.log(length);
        for (var i = 0; i < length; i++) {
            var group;
            var groupChoice = Math.random();
            console.log("GroupChoice: " + groupChoice);
            if (groupChoice <= 0.33) {group = symboles.vocals;}
            if (groupChoice >= 0.33 && groupChoice <= 0.66) {group = symboles.konsonants;}
            if (groupChoice >= 0.66) {group = symboles.numbers; numberCount++;}
            if (i > 2 && group.includes(previous1) && group.includes(previous2) || numberCount > Math.floor(length / 8) && group == symboles.numbers) {
                i = i - 1;
            } else {
                var newSymbol = group[Math.floor(Math.random() * group.length)];
                if (newSymbol == previous1) { 
                    i = i - 1;
                } else {
                    password += newSymbol;
                    previous2 = previous1;
                    previous1 = newSymbol;
                }
            }
            console.log("Adding digits: " + newSymbol);
        }
        numberCount = 0;
        return password;
    }
}

function createPassword() {
    password ="";
    passwords++;
    console.log("Step 1...");
    var digitsLength = prompt("How many digits?", "6 - 32");
    if (digitsLength < 6) {digitsLength = prompt("Please stick to the minimum amount of digits allowed.", "6 - 32");}
    var newPassword = new Password().create(digitsLength);
    console.log("Password " + passwords + ": " + newPassword);
    alert("New password: " + newPassword);
}