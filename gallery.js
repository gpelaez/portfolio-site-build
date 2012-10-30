(function ($) {
    "use strict";

        var slides = $('#slide-container-inner .slide');
        var videoSlide = slides.last();
        var videoSlideIndex = slides.size() - 1;

        	window.initGallery = function() {
            $.getJSON({
                url: "slides.json",
                data: function (data) { 
                    $.each(data.slides, function (url) {
                        $('<div class="slide"><img src="' + url + '" /></div>').appendTo('#slide-container-inner');
                    });
                }
            })
        }

        function getSlideSize() {
            return slides.first().width();
        }

        function getLeftPos() {
            return (parseInt($('#slide-container-inner').css('left')) || 0);
        }

        function canGoLeft() {
            return getLeftPos() < 0;
        }

        function canGoRight() {
            return getLeftPos() > -((slides.size() - 1) * getSlideSize());
        }

        /*
			Animates the slideshow to the relative or absolute location
			specified by {pixel}, i.e. 100, +=100 or -=100.
		 */
        function setPixelLocation(pixel) {
            $('#slide-container-inner').animate({
                'left': pixel + 'px'
            });
        }

        /*
			Gets the offset in pixels to view the slide at {index}.
			This value will always be negative.
		 */
        function getPixelLocationForIndex(index) {
            return -(index * getSlideSize());
        }

        /*
			Navigates the viewer to the slide at the given index.
		 */
        function goToIndex(index) {
            setPixelLocation(getPixelLocationForIndex(index));
        }

        /*
			Animates to the slide {count} items from the current.
		 */
        function animateSlide(count) {
            var symbol = (count >= 0) ? '+=' : '-=';
            var pixel = symbol + (Math.abs(count) * getSlideSize());

            setPixelLocation(pixel);
        }

        $("#go-left").click(function () {
            if (canGoLeft()) animateSlide(1);
            else goToIndex(slides.size() - 1);
        });

        $("#go-right").click(function () {
            if (canGoRight()) animateSlide(-1);
            else goToIndex(0);
        });

        $("#nav-middle").click(function () {
            $("#thumbnail-gallery").fadeIn();
        });

        //trigger the "contact window" to fade-in upon clicking "contact"
        $("#contact-button").click(function () {
            $("#contact-info").fadeIn();
            e.preventDefault(); // stops the link from going where href says
        })


        //trigger the "resume window" to fade-in upon clicking "contact"
        $("#resume-button").click(function () {
            $("#resume-info").fadeIn();
            e.preventDefault(); // stops the link from going where href says
        })

        //upon clicking anywhere that's NOT a link, clear the  contact JS window
        $("#contact-info").click(function () {
            $("#contact-info").fadeOut();
        })





        //upon clicking a thumbnail from the gallery, go to that piece in the lineup
        $("#thumbnail-gallery .thumbnail").each(function (i, thumbnail) {
            $(thumbnail).click(function () {
                $("#thumbnail-gallery").fadeOut();
                goToIndex(i);
            });
        });

})(window.jQuery);






/////////////////////////////////////////////////////////////////////////////////