var machineNum;
var count = 0;
var difficulty = 0;

function writeMachineNum10() {
    restartGame();
    difficulty = 1;
    machineNum = Math.round(Math.random() * 10);
    console.log(machineNum);
    document.querySelector(".level>p").innerHTML = "Избери число от 0 до 10!";
    document.querySelector(".level>i:nth-child(1)").style.color = "yellow";

    return machineNum;
}

function writeMachineNum100() {
    restartGame();
    difficulty = 2;
    machineNum = Math.round(Math.random() * 100);
    console.log(machineNum);
    document.querySelector(".level>p").innerHTML = "Избери число от 0 до 100!";
    document.querySelector(".level>i:nth-child(3)").style.color = "yellow";

    return machineNum;
}

function writeMachineNum1000() {
    restartGame();
    difficulty = 3;
    machineNum = Math.round(Math.random() * 1000);
    console.log(machineNum);
    document.querySelector(".level>p").innerHTML = "Избери число от 0 до 1000!";
    document.querySelector(".level>i:nth-child(5)").style.color = "yellow";

    return machineNum;
}

function restartGame() {
    //clear input and history
    var arr = document.getElementsByTagName("input");
    arr[0].value = "";
    document.getElementById("history").innerHTML = "";
    document.getElementById("end").innerHTML = "";

    var awesome = document.querySelectorAll(".level>i");
    for (let i = 0; i < awesome.length; i++) {
        awesome[i].style.color = "#FFF";
    }
    //broi na opitite da poznaem chisloto
    count = 0;

    //restart animation
    var bal = document.getElementsByClassName("balloon");
    for (let i = 0; i < bal.length; i++) {
        bal[i].style.display = "none";
        bal[i].style.animationPlayState = "paused";
    }
}

function writeUserNum() {
    var userNum = document.getElementById("input").valueAsNumber;

    if (!userNum) {
        document.getElementById("history").innerHTML += `<i>Трябва първо да въведеш число!</i><hr>`;
        return;
    } else {
        switch (difficulty) {
            case 1:
                if ((userNum < 0) || (userNum > 10)) {
                    document.getElementById("history").innerHTML += `<b>${userNum}</b> <i>:Не, не! Числото трябва да е от 0 до 10.</i><hr>`;
                    var arr = document.getElementsByTagName("input");
                    arr[0].value = "";
                    return;
                } else
                    return userNum;
            case 2:
                if ((userNum < 0) || (userNum > 100)) {
                    document.getElementById("history").innerHTML += `<b>${userNum}</b> <i>:Не, не! Числото трябва да е от 0 до 100.</i><hr>`;
                    var arr = document.getElementsByTagName("input");
                    arr[0].value = "";
                    return;
                } else
                    return userNum;
            case 3:
                if ((userNum < 0) || (userNum > 1000)) {
                    document.getElementById("history").innerHTML += `<b>${userNum}</b> <i>:Не, не! Числото трябва да е от 0 до 1000.</i><hr>`;
                    var arr = document.getElementsByTagName("input");
                    arr[0].value = "";
                    return;
                } else
                    return userNum;
        }
    }

}

function checkForEnter(event) {
    if (event.keyCode === 13) {
        guessMe();
    }
}

function guessMe() {
    if (document.getElementById("end").innerHTML) {
        return;
    }

    count++;

    var userNum = writeUserNum();
    if (machineNum === userNum) {
        document.getElementById("end").innerHTML = "Браво! Числото е: " + machineNum;
        var bal = document.getElementsByClassName("balloon");
        for (let i = 0; i < bal.length; i++) {
            bal[i].style.display = "block";
            bal[i].style.animationPlayState = "running";
        }
    } else if (count === 10) {
        document.getElementById("end").innerHTML = "Съжалявам, нямаш право на повече опити. Избери нова игра!"

    } else if (userNum > machineNum && userNum <= 1000 && userNum >= 0) {
        document.getElementById("history").innerHTML += `<b>${userNum}</b> <i>:Опитай пак! По-надолу!</i><hr>`;
        var arr = document.getElementsByTagName("input");
        arr[0].value = "";

    } else if (userNum < machineNum && userNum <= 1000 && userNum >= 0) {
        document.getElementById("history").innerHTML += `<b>${userNum}</b> <i>:Опитай пак! По-нагоре!</i><hr>`;
        var arr = document.getElementsByTagName("input");
        arr[0].value = "";
    }
}