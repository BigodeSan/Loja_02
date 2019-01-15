$(function(){
    var home = $(".home");
        home.hide();
        $(window).scroll(function () { 
                if ($(this).scrollTop() > 120) {
        home.show();
                } else {
        home.hide(); 
                }
    });
});

