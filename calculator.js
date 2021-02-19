const calculator = document.querySelector(".calculator"),
    screenValue = document.querySelector(".screen-value"),
    previousValue = document.querySelector(".previous-value"),
    keys = document.querySelector('.calculator-keys'),
    operator = document.querySelectorAll(".operator");

function screenEmpty(){
    screenValue.innerHTML = "";
}

document.querySelector(".clear").addEventListener("click", () => {
    screenEmpty();
});//C버튼 입력

document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
        if(screenValue.innerHTML.length > 16){
            return alert("최대 입력 범위를 초과하였습니다");
        }
        screenValue.innerHTML += element.innerHTML;
    });
});//digit 입력

document.querySelector(".decimal").addEventListener("click", () => {
    if(screenValue.innerHTML.includes(".")){
        return; //screenvalue 하나로 eval들어가야하면 float두개 불가능한 문제.
        //결국 두개의 값을 계속 이어나가는 식으로 바꿔야함
    } 
    screenValue.innerHTML += ".";
});//dot 추가

document.querySelectorAll(".operator").forEach(oper => {
    oper.addEventListener("click", function() {
        if(screenValue.innerHTML !== ""){
            screenValue.innerHTML = screenValue.innerHTML + oper.innerHTML;
        } else{
            screenEmpty();
        }
    })
})

// Array.from(document.querySelectorAll(".operator")).forEach(a => {
//     a.addEventListener("click", function() {
//         if(screenValue.innerHTML !== "") {
//             if(previousValue === "") {
//                 previousValue.innerHTML = screenValue.innerHTML+ operator.value + this.innerHTML;
//             } else {
//                 previousValue.innerHTML = previousValue+ " " + screenValue + " " + this.innerHTML;
//             }
//         }
//         if(screenValue.innerHTML === "" && previousValue.innerHTML !== ""){
//             previousValue.innerHTML = previousValue.innerHTML.slice(0, -1) + " " + this.innerHTML;
//         }
//         screenEmpty();
//     });
// });

document.querySelector(".equal").addEventListener("click", () => {
    if(screenValue.innerHTML) {
        screenValue.innerHTML = eval(screenValue.innerHTML);
    }
});
