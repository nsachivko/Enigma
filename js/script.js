var score = 0;

function start(){
    console.log("start()");
    var refresh_button = document.getElementById("refresh");
    refresh();
    refresh_button.onclick = function () {
        refresh();
      };
}

function refresh(){
    clear();
    var number = getRand(2,5);
    var numbers = new Array();
    var operators = new Array();
    var protection = 0;
    var operator = 0;
    var create_answer = " ";
    for (var i = 0; i < number; i++){
        numbers[i] = getRand(2,11);
        document.getElementById("task-box").innerHTML += numbers[i];
        console.log(numbers[i]);

        if (i + 1 != number){
            operator = getRand(0,2);
            if (operator == 0){
                document.getElementById("task-box").innerHTML += " + ";
            } else if (operator == 1){
                document.getElementById("task-box").innerHTML += " - ";
            } else if (operator == 2 && protection != 3){
                protection++;
                document.getElementById("task-box").innerHTML += " * ";
            }else{
                document.getElementById("task-box").innerHTML += " + ";
            }
            operators[i] = operator;
        } else {
            document.getElementById("task-box").innerHTML += " = "; 
        }

    }
    var minus = document.getElementById("minus")
    var number0 = document.getElementById("number0");
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");
    var number5 = document.getElementById("number5");
    var number6 = document.getElementById("number6");
    var number7 = document.getElementById("number7");
    var number8 = document.getElementById("number8");
    var number9 = document.getElementById("number9");
    var enter_button = document.getElementById("enter-button");
    var delete_button = document.getElementById("delete-button");
    number0.onclick = function () {
        document.getElementById("answer-box").innerHTML += 0;
        create_answer += "0";
        
    };
    number1.onclick = function () {
        document.getElementById("answer-box").innerHTML += 1;
        create_answer += "1";
    };
    number2.onclick = function () {
        document.getElementById("answer-box").innerHTML += 2;
        create_answer += "2";
    };
    number3.onclick = function () {
        document.getElementById("answer-box").innerHTML += 3;
        create_answer += "3";
    };
    number4.onclick = function () {
        document.getElementById("answer-box").innerHTML += 4;
        create_answer += "4";
    };
    number5.onclick = function () {
        document.getElementById("answer-box").innerHTML += 5;
        create_answer += "5";
    };
    number6.onclick = function () {
        document.getElementById("answer-box").innerHTML += 6;
        create_answer += "6";
    };
    number7.onclick = function () {
        document.getElementById("answer-box").innerHTML += 7;
        create_answer += "7";
    };  
    number8.onclick = function () {
        document.getElementById("answer-box").innerHTML += 8;
        create_answer += "8";
    };
    number9.onclick = function () {
        document.getElementById("answer-box").innerHTML += 9;
        create_answer += "9";
    };
    enter_button.onclick = function () {
        if (create_answer ==  mathOperation(numbers, operators)){
            score++;
            console.log("Correct");
            document.getElementById("score").innerHTML = score;
        } else{
            score = 0;
            document.getElementById("score").innerHTML = score;
        }
        document.getElementById("answer-box").innerHTML = " ";
        refresh();
    };
    delete_button.onclick = function () {
        document.getElementById("answer-box").innerHTML = " ";
        create_answer = " ";
        console.log(create_answer);
    };
    minus.onclick = function () {
        document.getElementById("answer-box").innerHTML = create_answer * -1;
        create_answer = create_answer * -1;
        console.log(create_answer);
    };
}


function mathOperation(numbers, operators){
    console.clear();
    var answer = 0;
    var temp_array = numbers;
    console.log(operators);


    for (var i = 0; i < operators.length; i++){
        if (operators[i] == 2){
            if (temp_array[i] == 7777777){
                console.log("777777");
                temp_array[i -1] = temp_array[i- 1] * temp_array[i+1];
                temp_array[i + 1] = 7777777;
            } else {
                console.log("here");
                temp_array[i] = temp_array[i] * temp_array[i+1];
                temp_array[i + 1] = 7777777;
            }
        }
    }
    

    for (var i = 0; i < operators.length;i++){
        if (operators[i] == 1){
            if (temp_array[i + 1] < 7777777){
                temp_array[i + 1] = temp_array[i + 1] * -1;
            }
        }
    }


    for (var i = 0; i < temp_array.length;i++){
        if (temp_array[i] < 7777777){
        answer += temp_array[i];
        }
    }
    return answer;
}


function clear(){
    document.getElementById("task-box").innerHTML = " ";
}


function getRand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


start();