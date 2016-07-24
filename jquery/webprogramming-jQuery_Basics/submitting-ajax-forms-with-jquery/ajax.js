$(function(){
    // process the form
    $('form#ajax_one').submit(function(){
        // get the form data
        // there are many ways to get this data 
        // using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'superheroAlias'    : $('input[name=superheroAlias]').val()
        };
        // process the form 
        $.ajax({
            type: 'POST',//define the type of HTTP verb we want to us (POST for our form)
            url : 'process.php',// the url whare we watn to POST
            data : formData,//our data object
            dataType : 'json',
            encode : true
        }).done(function(data){
            //using the done promise callback
            //log data to the console so we can see
            console.log(data)
            //here we will handle errors and validation message
        });
        event.preventDefault();
    });
});


