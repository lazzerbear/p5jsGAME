/* Concat() method puts two arrays together.
It returns an array.
*/

function myConcat(){
    var mammals = [
    "inu",
    "neko",
    "dolphin" 
]
    var birds = [
        "tori",
        "kurotori",
        "pigeon"
    ]
    var birdsAndMammals = mammals.concat(birds);
    document.getElementById("demo").innerHTML = birdsAndMammals;
}


