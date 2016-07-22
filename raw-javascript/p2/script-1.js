/* 
    Created on : Jul 14, 2016, 10:42:13 AM
    Author     : wakidur
*/

/*step -1*/
function greetMe(yourName) {
    console.log( "hello" + yourName );
}
greetMe("Wakidur! how are you");

/*step - 2 */
var a ;
if ( a === undefined ) {
    console.log("value is not define" );
} else {
    console.log("value is define");
}


/* step - 3 */
var myArray = [];
function myFunction( a, b){
    var c ;
    return c = a + b;
}

if (myArray[0]){
    myFunction(122, 12);
    
} else {
    console.log("value is define");
}

/* step - 4 
 *the undefined value converts to NaN when used in numeric context 
 */
var a ;
a + 2;// evaluates to NaN
var n = null ;
console.log(n * 32);

/* step - 5 */

if(true) {
    var x = 5;
}
console.log(x);

// this behavor changes, when using the let declaration introduced in ECMAScript 2015;
if(true){
    let y = 5;
}
consoe.log(y); // ReferenceError : y is not defined

/* step - 5 */
//Variable hoisting
Exaple 1 
console.log( x === undefined ) ; // true
 var x = 3;
 
Exaple 2 
var myvar = "my value";
(function(){
    console.log(myvar); // undefined
    var myvar = "local value";
})();

Exaple 3 
(function(){
    var myvar; 
    console.log(myvar);// undefine
    myvar = "local value";
})()
