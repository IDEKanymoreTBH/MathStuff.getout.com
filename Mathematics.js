const symbolPossibilities = ["+", "-", "*", "/", "times the sine of", "times the tangent of", "times the cosine if", "to the power of", "root of", "mod"];
let epsilon = 0.0001
function MathDoer(num1, num2, symbol) {
    if (symbol === symbolPossibilities[0]) {
        return num1 + num2;
    }
    else if (symbol === symbolPossibilities[1]) {
        return num1 - num2;
    }
    else if (symbol === symbolPossibilities[2]) {
        return num1 * num2;
    }
    else if (symbol === symbolPossibilities[3]) {
        return num1 / num2;
    }
    else if (symbol === symbolPossibilities[4]) {
        return num1 * (Math.sin(num2));
    }
    else if (symbol === symbolPossibilities[5]) {
        return num1 * (Math.tan(num2));
    }
    else if (symbol === symbolPossibilities[6]) {
        return num1 * (Math.cos(num2));
    }
    else if (symbol === symbolPossibilities[7]) {
        return Math.pow(num1, num2);
    }
    else if (symbol === symbolPossibilities[8]) {
        return Math.pow(num2, 1/num1);
    }
    else if (symbol === symbolPossibilities[9]) {
        return num1 % num2;
    }
}
document.getElementById("Start").addEventListener("click", function() {
    document.getElementById("Start").style.visibility = "hidden";
    document.getElementById("InputNum").style.visibility = "visible";
    document.getElementById("label").style.visibility = "visible";
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let symbol = symbolPossibilities[Math.floor(Math.random() * 10)];
    let answer;
    let score = 0;
    let expression = `What is ${num1} ${symbol} ${num2}(FIRST FOUR DIGITS ONLY)?`
    document.getElementById("label").textContent = expression;
    document.getElementById("InputNum").addEventListener("keydown", function(event) {
        let inputField = document.getElementById("InputNum");
        if (event.key === "Enter") {
            answer = MathDoer(num1, num2, symbol);
            answer = answer.toFixed(4);
            console.log(answer);
            console.log(inputField.value);
            if (Math.abs(Number(inputField.value) - answer) < epsilon) {
                document.getElementById("InputNum").value = "";
                score++;
                num1 = Math.floor(Math.random() * 100);
                num2 = Math.floor(Math.random() * 100);
                symbol = symbolPossibilities[Math.floor(Math.random() * 10)];
                expression = `What is ${num1} ${symbol} ${num2}(ONLY FIRST FOUR DIGITS OF ANSWER)?`
                document.getElementById("label").textContent = expression;
            }
            else {
                document.getElementById("label").textContent = `you lose idiot. Score: ${score}`;
            }
        }
    });
});