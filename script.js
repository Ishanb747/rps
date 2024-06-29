function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let x = getRandomInt();
    if (x == 0) {
        return "rock";
    }
    if (x == 1) {
        return "paper";
    }
    if (x == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let y = String(prompt("rock, paper or scissors?")).toLowerCase();

    while (y !== "rock" && y !== "paper" && y !== "scissors") {
        y = String(prompt("Please only select from rock, paper, or scissors. Spelling must be exact and don't use caps lock!")).toLowerCase();
    }
    return y;
}

function generateResult(x, y) {
    let result = "undecided";
    if (x == "rock" && y == "paper") {
        result = "human";
    } else if (x == "rock" && y == "rock") {
        result = "tie";
    } else if (x == "rock" && y == "scissors") {
        result = "computer";
    } else if (x == "paper" && y == "rock") {
        result = "computer";
    } else if (x == "paper" && y == "paper") {
        result = "tie";
    } else if (x == "paper" && y == "scissors") {
        result = "human";
    } else if (x == "scissors" && y == "rock") {
        result = "human";
    } else if (x == "scissors" && y == "paper") {
        result = "computer";
    } else if (x == "scissors" && y == "scissors") {
        result = "tie";
    }

    return result;
}

function play() {
    let ucount = 0;
    let ccount = 0;

    while (ucount + ccount < 5) {
        let x = getHumanChoice();
        let y = getComputerChoice();

        let result = generateResult(y, x);

        if (result == "human") {
            ucount++;
        }
        if (result == "computer") {
            ccount++;
        }
        if (result == "tie") {
            continue;
        }
    }

    let winner;
    if (ucount > ccount) {
        winner = "user";
    } else {
        winner = "computer";
    }

    console.log(`User has won ${ucount} rounds and computer has won ${ccount} rounds, hence the winner is ${winner}`);
}

play();
