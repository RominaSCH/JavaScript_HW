const result = document.getElementById("result");
const rangeText = document.getElementById("value-view");
const scoreCheck = document.getElementById("score-check");
let inputForm = document.querySelector(".input-number");

let randNum = 0;
let rangeNum = 0;
let inputNum = 0;

function ShowSliderValue(val){
    let valueView = document.getElementById("value-view-range");
    valueView.innerHTML = val;
    rangeNum = val;
    rangeText.innerHTML = `Generate a number between 0 and ${rangeNum}`;
}

function intNumber(){ //버튼 누르면 작동하는 함수
    inputNum = parseInt(inputForm.value);
    randomReset();
}

function randomReset(){
    randNum = Math.floor(Math.random()*rangeNum);//1~rangeNum 사이의 정수값 랜덤 설정
    numberCheck();
}

function numberCheck(){
    if(inputNum === randNum){
        scoreCheck.innerHTML = `You choose : ${inputNum}, RandomNum : ${randNum}`;
        result.innerHTML = "You Won! Congraturations!";
    } else {
        scoreCheck.innerHTML = `You choose : ${inputNum}, RandomNum : ${randNum}`;
        result.innerHTML = "You Lost";
    }
}