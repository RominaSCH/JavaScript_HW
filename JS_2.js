const title = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
    resize: function handleResize(){//window resize할 때 실행할 함수
        title.innerText = "Resized!";
        title.sytle = "color:colors[4]";
    },

    click: function handleClick(){//click할 때 실행할 함수
        title.innerText = "You clicked!";
        title.style.color = colors[1];
    },

    over: function handleOver(){//마우스가 Text 위로 왔을 때 실행할 함수
        title.innerText = "Cursor is over me.";
        title.style.color = colors[2]
    },

    left: function handleLeft(){//마우스가 Text 위에서 떠났을 때 실행할 함수
        title.innerText = "Cursor leaves me..";
        title.style.color = colors[3]
    },

    rightClick: function handleRightClick(){//마우스 우클릭 이벤트
        title.innerText = "You clicked Right button now"
        title.style.color = colors[4]
    }
}

window.addEventListener("resize", superEventHandler.resize);
title.addEventListener("click", superEventHandler.click);
title.addEventListener("mouseenter", superEventHandler.over);
title.addEventListener("mouseleave", superEventHandler.left);
window.addEventListener("contextmenu", superEventHandler.rightClick);
//resize할 시에 handleResize함수 호출 handleResize()하면 즉시실행하기때문에 넣지 말 것