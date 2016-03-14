$(function(){
    $("#main-menu a").on( "click", function(event){
        event.preventDefault();
        $("#main").load( this.href + '#sharemenu *', function( data, status){
            $bar = $("#notification-bar");
            if( status === "success"){
                $bar.text( "The page has been successfully loaded");
            } else {
                $bar.text("An error occurred.");
            }
            $bar
            .slideDown('normal')
            .delay(2000)
            .slideUp('fast');
        })
    });
  // Needed to simulate a JSON response
        var fakeResponse = {
            status: "error",
            message: "Username already in use"
        };

        $('input').blur(function() {
            var data = {};
            data[this.name] = this.value;

            if (this.value) {
              $.get(
                 'data/innerpage.html',
                 data,
                 function (responseText) {
                    if (fakeResponse.status === 'error') {
                       $('#notification-bar1')
                          .html('<p>' + fakeResponse.message + '<p>')
                    }
                });
            }
        });

        $('input').focus(function() {
          $('#notification-bar').html('');
});  
    
})