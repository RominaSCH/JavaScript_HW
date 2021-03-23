const selectCountry = document.querySelector(".js-from");
const selectCountryList = toDoList = document.querySelector(".js-fromList");

const FROM_S= 'yourFrom';
let fromList = [];

function saveCountry(text){
    localStorage.setItem(FROM_S, text);
}

// function saveSelectData(data){
//     localStorage.setItem(FROM_S, JSON.stringify(fromList));
//     const value = data.value;
//     document.getElementById('selected').innerText = value;
//     const text = value.options[value.selectedIndex].text;
//     console.log(value.options);
//     document.getElementById('selected').innerText = text;
// }

function handleSelect(e){
    const value = e.value;
    document.getElementById('selected').innerText = value; 
}

function loadFrom() {
    const selectedFrom = localStorage.getItem(FROM_S);
    if(selectedFrom !== null){
        //option value = selectedFromValue
        }
        // choose your country(just let to choose)
    
}

function init(){
    loadFrom();

}
init();