// Shorthand for $( document ).ready()
$(function() {
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function(){
        var content = $(this).html();
        console.log("first content value ---- " + content );
        console.log("first content value ---- " + content.length );
        content.slice(' ');
        //contain.splite('');
        
        if(content.length > showChar){
            var c = content.substr(0, showChar);
            //console.log("second check for value c-------- " + c);
            var h = content.substr(showChar, content.length - showChar);
            //console.log("third check for value h------- " + h);
            var html = 
                    c + '<span class="moreellipses">'
                    + ellipsestext+ 
                    '&nbsp;</span><span class="morecontent"><span>' 
                    + h + 
                    '</span>&nbsp;&nbsp;<a href="" class="morelink">' 
                    + moretext + 
                    '</a><span></sapn></span>';
            
            $(this).html(html);
        }
    });
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
            $(this).parent().prev().toggle();
            //console.log($(this).parent().prev().toggle());
            $(this).prev().toggle();
            //console.log( $(this).prev().toggle());
            $(this).next().toggle();
            //console.log("next item " + $(this).next().toggle());
	    return false;
	});
});

/*
 <div class="comment more">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum laoreet, nunc eget laoreet sagittis,
                quam ligula sodales orci, congue imperdiet eros tortor ac lectus.
                Duis eget nisl orci. Aliquam mattis purus non mauris
                blandit id luctus felis convallis.
                Integer varius egestas vestibulum.
                Nullam a dolor arcu, ac tempor elit. Donec.
            </div>
            */