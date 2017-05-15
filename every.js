// every()
//takes a function to check against every element in array.
// returns true or false
//if any element fails the check false is returned

var cans = [
    3, 1, 5
    
]


//test for every() to use against elements in cans array.
function checkCans(can){
    
    return can >= 3;
}

function myevery(){
    document.getElementById("third").innerHTML = cans.every(checkCans);
    
}