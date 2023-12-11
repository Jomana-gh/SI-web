
function clearScreen() {
    document.getElementById("result").innerHTML = "";
}
 
function display(value) {
    document.getElementById("result").innerHTML += value;
}
 
function calculate() {
    let p = document.getElementById("result").innerHTML;
    let q = eval(p);
    document.getElementById("result").innerHTML = q;
}