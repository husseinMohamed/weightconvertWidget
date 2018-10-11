const lbsInput = document.querySelector("#lbsInput");
const gramsOutput = document.querySelector("#gramsOutput");
const kiloOutput = document.querySelector("#kiloOutput");
const ounceOutput = document.querySelector("#ounceOutput");
const calcOne = document.querySelector("#calcOne");
const calcTwo = document.querySelector("#calcTwo");
const calcThree = document.querySelector("#calcThree");
const output = document.querySelector("#output");
output.style.visibility = 'hidden';

lbsInput.addEventListener('input',function(){
    output.style.visibility = 'visible';
    var num = lbsInput.value;
    var gram = eval(num * 453.592);
    gramsOutput.innerHTML = gram;
    var formGram = "<p>Formula: " + num + " * 453.592</p>";
    calcOne.innerHTML = formGram;

    var kilo = eval(num * 0.453592);
    kiloOutput.innerHTML = kilo;
    var formKilo = "<p>Formula: " + num + " * 0.453592</p>";
    calcTwo.innerHTML = formKilo;

    var ounce = eval(num * 16);
    ounceOutput.innerHTML = ounce;
    var formGram = "<p>Formula: " + num + " * 16</p>";
    calcThree.innerHTML = formGram;







});