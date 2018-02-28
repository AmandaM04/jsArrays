
// Challenge #1

var test1 = 'cat'; //false
var test2 = 'racecar'; //true
var test3 = 'bear'; //false
var test4 = 'mom'; //true

var test= "cat";
var opp = test.split("").reverse().join("");

if(test === opp){
    console.log("same? ", true);
}else{
    console.log("same? ", false); 
}
