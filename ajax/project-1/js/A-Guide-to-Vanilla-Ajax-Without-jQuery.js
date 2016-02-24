//This is the anatomy of a basic Ajax request
var xhr = new XMLHttpRequest();
xhr.open( "GET", "send-ajax-data.php");
xhr.send(null);
xhr.onreadystatechange = function() {
   var DONE = 4;// readyState 4 means the request is done
   var OK = 200 ; // Status 200 is successful return
}


