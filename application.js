(function ($) {
    "use strict";
    $(function () {
	   
        $("#work-button").click(function () {
        	 
	        initGallery();
        });


    });






    //link resume-button to PDF in seperate tab
    $("#resume-info").click(function () {
        window.open('page.html', '_newtab');
    })





    $("#contact-button").click(function () {
        $('.slide').fadeOut();
    })





})(window.jQuery);