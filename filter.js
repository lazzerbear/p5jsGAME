//filter()

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//returns the array members that past the test.
const randomNumbers = [
    1, 2, 3, 5, 8, 13
    
]


//test for filter to run against every element in randomNumbers
function checkNumber(randomNumber){
    
    return randomNumber >= 5;
}

function myfilter(){
    document.getElementById("fith").innerHTML = randomNumbers.filter(checkNumber);
    
}