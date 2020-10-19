var passwords = 0; 
var password = "";
var previous2; // sollte Teil von PasswordGenerator sein, muss nicht global sein; generell sollte man globale Variablen möglichst vermeiden
var previous1; // s.o.
var numberCount = 0; // s.o.

document.addEventListener("keydown", event => {
    if (event.keyCode == 32 || event.keyCode == 13) {
        
        createPassword();
    }
})

class PasswordGenerator {
    create(length) {
        console.log("Step 2...");
        var symbols = {
            vowels: [
                "a", "e", "i", "o", "u"
            ],
            consonants: [
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
            if (groupChoice <= 0.33) {group = symbols.vowels;}
            if (groupChoice > 0.33 && groupChoice < 0.66) {group = symbols.consonants;}
            if (groupChoice >= 0.66) {group = symbols.numbers; numberCount++;}
            if (i > 2 && group.includes(previous1) && group.includes(previous2) || numberCount > Math.floor(length / 8) && group == symbols.numbers) {
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
    // Hier weitere Grenzfälle behandeln: 
    // - eingegebener Wert keine Zahl
    // - Zahl > 32 (sehr große Zahlen lassen Browser einfrieren)
    var newPassword = new PasswordGenerator().create(digitsLength);
    console.log("Password " + passwords + ": " + newPassword);
    alert("New password: " + newPassword);
}