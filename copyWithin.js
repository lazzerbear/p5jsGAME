// copyWithin()

//copyWithin() method moves items in array around.
// takes 3 arguments
// first is element in array to move too "the target"
// second is where to start copying in the array
// __optional__ and thrid is when to stop coppying default is array.length
// returns changed array



var mammals = [
    "inu",
    "neko",
    "dolphin" 
    ]

function mycopyWithin(){
    
    document.getElementById("second").innerHTML = mammals.copyWithin(1,0);
    console.log("mycopyWithing works.");
    }