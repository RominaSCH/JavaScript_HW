const screenValue = document.querySelector(".screen-value"),
    previousValue = document.querySelector(".previous-value"),
    operator = document.querySelectorAll(".operator");

function previousEmpty(){
    previousValue.innerHTML = "";
}

function screenEmpty(){
    screenValue.innerHTML = "";
}

document.querySelector(".clear").addEventListener("click", () => {
    screenEmpty();
    previousEmpty();
});//C버튼 입력

document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
        if(screenValue.innerHTML.length > 21){
            return alert("최대 입력 범위를 초과하였습니다");
        }
        screenValue.innerHTML += element.innerHTML;
    });
});//digit 입력

document.querySelector(".decimal").addEventListener("click", () => {
    if(screenValue.innerHTML.includes(".")){
        return; //screenvalue 하나로 eval들어가야하면 float두개 불가능한 문제.
        //결국 두개의 값을 계속 이어나가는 식으로 바꿔야함
        //완료
    } 
    screenValue.innerHTML += ".";
});//dot 추가

document.querySelectorAll(".operator").forEach(oper => {
    oper.addEventListener("click", function() {
        if(screenValue.innerHTML !== ""){//현재입력값있음
            if(previousValue.innerHTML !== ""){//현재 이전 둘 다 있음
                previousValue.innerHTML += screenValue.innerHTML + oper.innerHTML;
                screenEmpty();
            } else {//현재입력값만 있음
                previousValue.innerHTML = screenValue.innerHTML + oper.innerHTML;
                screenEmpty();
            }
        } else{//현재입력값 없음
            if(previousValue.innerHTML === ""){//둘다없음
                screenEmpty();
            } else { //이전값만 있음
                //아무것도 안함..은 개뿔 연산자 수정이긴한데 어떻게하지
                //그냥 조금 구린 계산기입니다
            }
        }
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    if(screenValue.innerHTML) {
        previousValue.innerHTML += screenValue.innerHTML;
        screenValue.innerHTML = eval(previousValue.innerHTML);
        previousValue.innerHTML = "";
    }
});
