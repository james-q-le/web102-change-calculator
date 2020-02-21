// Write your JavaScript here
function handleClickEvent() {
    var change = document.getElementById('amount-received').value - document.getElementById('amount-due').value; 
    var dollar = 0; 
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    while (change >= 1) {
        change--;
        dollar++;
    }
    document.getElementById('dollars-output').innerText = dollar;
    
    while (change >= .25 && change <= .99) {
        change = change - .25;
        quarters++;
    }
    document.getElementById('quarters-output').innerText = quarters;
    
    while (change >= .1 && change <= .24) {
        change = change - .1;
        dimes++;
    }
    document.getElementById('dimes-output').innerText = dimes;
    
    while (change >= .05 && change <= .09) {
        change = change - .05;
        nickels++;
    }
    document.getElementById('nickels-output').innerText = nickels;
    
    while (change >= .01 && change <= .04) {
        change = change - .009;
        pennies++;
    }
    document.getElementById('pennies-output').innerText = pennies;
}

document.getElementById('calculate-change').onclick = function() {
    handleClickEvent()
}



