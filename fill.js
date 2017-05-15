//fill()

// fills the whole array with a value
// takes three arguments 
// 1. the value to fill
// Optional 2. the start of the fill
// Optional 3. the end of the fill


var itemsOnDesk = [
    "nintendo",
    "empty cans",
    "phone",
    "pendent"   
]



function myfill(){
    document.getElementById("forth").innerHTML = itemsOnDesk.fill("desu!");
    console.log("myfill!");
    
}