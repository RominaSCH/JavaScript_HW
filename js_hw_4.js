function handleResize(){//window resize할 때 실행할 함수 
    let width = window.innerWidth;
    if (width > 1200) {
        document.body.style.backgroundColor = "coral";
    } else if ( width > 700){
        document.body.style.backgroundColor = "teal";
    } else {
        document.body.style.backgroundColor = "crimson";
    }
}

function init(){
    window.addEventListener("resize", handleResize);
}
init();