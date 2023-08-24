
//FOR NAVAGATION BAR
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa fa-close'
    : 'fa fa-cog'
}

//FOR CALCULATION
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


const specialChars = ["%", "*", "/", "-", "+","="];
const history = [];
let output = "";
let opr = "";

const calculate = (btnValue) => { 

    if(btnValue === "=" && output !== "") {

        opr = output;
        output = eval(output.replace("%", "/100"));

        history.push(opr+" = "+output);

        let text = "";

        history.forEach(myFunction);

        document.getElementById("demo").innerHTML = text;

        function myFunction(item) {
            text += item + "<br>"; 
        }

    } else if (btnValue === 'AC') {
        output = "";
    } else if (btnValue === 'DEL') {
        output = output.toString().slice(0,-1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    } 

    display.value = output;
}

buttons.forEach((button) => {
        button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


//FOR CHANGE COLOR
const Color = document.querySelector(".container");
const btn = document.querySelectorAll("input");

const chng_color = (btnColor) => {
    if (btnColor === 'red') {
        Color.style.background = "#E74C3C";
    } else if (btnColor === 'blue') {
        Color.style.background = "#3498DB";
    } else if (btnColor === 'green') {
        Color.style.background = "#16A085";
    } else if (btnColor === 'yellow') {
        Color.style.background = "#F1C40F";
    } else if (btnColor === 'orange') {
        Color.style.background = "#E67E22";
    } else if (btnColor === 'violet') {
        Color.style.background = "#9B59B6";
    }
} 

btn.forEach((input) => {
    input.addEventListener("click", (e) =>  chng_color(e.target.dataset.value));
});





