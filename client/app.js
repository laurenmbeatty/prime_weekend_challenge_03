$(document).ready(function(){
    $.ajax({
        url: "/getEpsilon"
    }).done(function(response){
        console.log(response);

        //need to loop through the response, and assign each epsilonPerson[i] to a slide
        //maybe epsilonPerson[0] has to equal class current slide, and every other one isn't
        //then append to dom?
        //then do the slide, and counters, and arrow functionality, including reversing them

        for(var i = 0; i < response.length; i++) {
            //console.log(response[i]);
            var epsilonPerson = response;
            var $slide = $("<div class='slide'><h1 class ='slide-" + i + "'" + ">" + epsilonPerson[i].name + "</h1>" + "<p>" + epsilonPerson[i].description +
                "</p>" + "<p>" + epsilonPerson[i].shout + "</p></div>");

            $('.current').append($slide);

            $('.slide-0').parent().addClass('active-slide');
        }

            $('#right').on('click', function() {
                var currentSlide = $('.active-slide');
                var nextSlide = currentSlide.next();

                var currentDot = $('.active-dot');
                var nextDot = currentDot.next();

                //when we get to the last slide, the next slide becomes the first slide again

                if(nextSlide.length === 0) {
                    nextSlide = $('.slide').first();
                    nextDot = $('.dot').first();
                }

                currentSlide.fadeOut(600).removeClass('active-slide');
                nextSlide.fadeIn(600).addClass('active-slide');

                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
            });


        $('#left').on('click', function() {
            var currentSlide = $('.active-slide');
            var prevSlide = currentSlide.prev();

            var currentDot = $('.active-dot');
            var prevDot = currentDot.prev();

            if(prevSlide.length === 0) {
                prevSlide = $('.slide').last();
                prevDot = $('.dot').last();
            }

            currentSlide.fadeOut(600).removeClass('active-slide');
            prevSlide.fadeIn(600).addClass('active-slide');

            currentDot.removeClass('active-dot');
            prevDot.addClass('active-dot');
        });




        });

    });

