(function(){
    var link = document.getElementsByTagName("a")[0];
    
        link.onclick = function(){
            // XHR Object
            var xhr = new XMLHttpRequest();
            // handle the "onreadystatechange" event 
            // xhr.readyState property values
            // 0 = uninitalize
            // 1 = Loading 
            // 2 = Interactive 
            // 3 = Complete
            // 
            
            xhr.onreadystatechange = function(){
                if((xhr.readyState == 4) &&  (xhr.status == 200 || xhr.status == 304)){
                    xhr.responseText;
                    var body = document.getElementsByTagName('body')[0];
                    var  p = document.createElement('p');
                    var pText = document.createTextNode(xhr.responseText);
                        p.appendChild(pText);
                        body.appendChild(p);
                    console.log("Success full ajax call");
                    
                }
            }
            //open the request
            xhr.open("GET", "data/data.txt", true);
            
            // send the request
            xhr.send(null)
            
            return false;// the default action of the event will not be triggered. (s.preventDefault())
        };
}());


