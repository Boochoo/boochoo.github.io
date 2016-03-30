/**
 * Created by boochoo on 17/03/16.
 */
$(document).ready(function(){

    $('nav a').on('click', (function(){

        //Assign the current class
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        //heading text
        $('h1.heading').text($(this).text());

        //filtering

        var category = $(this).text().toLowerCase().replace(' ', '-');

        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else{
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                }else{
                   $(this).fadeIn('slow').removeClass('hidden');
                }
            })
        }
        //
        return false;
    }));

    $('ul#gallery li').on('mouseenter', function(){

        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
       // var lightbox = $(this).children().data('lightbox');

        //validation
        if(desc == null){
            desc = 'Click to enlarge';
        }

        if(title == null){
            title = '';
        }

        //create overlay div
        $(this).append('<div class="overlay"></div>');

        //get the overlay div
        var overlay = $(this).children('.overlay');

        //add html to overlay div
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

        overlay.fadeIn(400);

    });

    $('ul#gallery li').on('mouseleave', function(){

        //create overlay div
        $(this).append('<div class="overlay"></div>');

        //get the overlay div
        var overlay = $(this).children('.overlay');

        overlay.fadeOut(300);

    });

});