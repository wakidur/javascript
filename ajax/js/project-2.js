$(function(){
   $.ajax({
       //async: false,//set this options to false to perform a synchronous request
      // cache: false, // to force requested pages not to be cached by the browser
      // success: function(){},
     //  error: function(){},
     //  complete: function(){},//to be call when the request finishes after success and error callbacks are executed.
     
     
   }) ;
    $('#action-button').click(function() {
        $.ajax({
           url: 'http://api.joind.in/v2.1/talks/10889',
           data: {
              format: 'json'
           },
           error: function() {
              $('#info').html('<p>An error has occurred</p>');
           },
           dataType: 'jsonp',
           success: function(data) {
              var $title = $('<h1>').text(data.talks[0].talk_title);
              var $talk_title = $('<p>').text(data.talks[0].url_friendly_talk_title);
              var $description = $('<p>').text(data.talks[0].talk_description);
              var $type = $('<p>').text(data.talks[0].type);
              var $start_date = $('<p>').text(data.talks[0].start_date);
              var $speaker_name = $('<p>').text(data.talks[0].speakers[0].speaker_name);
              $('#info')
                 .append($title)
                 .append($talk_title)
                 .append($description)
                 .append($type)
                 .append($start_date)
                 .append($speaker_name)
           },
           type: 'GET'
        });
    });
    
    $('#main-menu a').click(function(event) {
        event.preventDefault();
        $.ajax( this.href, {
              url: "data/project-2.html",
              context: document.body,
              method: "POST",
            
            success: function(data) {
                $('#main').html( $(data).find('#main *') );
                console.log($(data));
                console.log($('#main').html( $(data).find('#main *') ));
                $('#notification-bar').text('The page has been successfully loaded');
            },
            error: function() {
                $('#notification-bar').text('An error occurred');
            }
        });
    });
});


