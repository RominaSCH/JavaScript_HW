let lastSelected;

const select = document.querySelector(".selectFrom");
//const selectOption = select.options[select.selectedIndex];
lastSelected = localStorage.getItem('select', lastSelected);

if(lastSelected){
    select.value = lastSelected;
}

select.onchange = function() {
    lastSelected = select.options[select.selectedIndex].value;
    console.log(lastSelected);
    localStorage.setItem('select', lastSelected);
}