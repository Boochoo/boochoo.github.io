/**
 * Created by boochoo on 17/03/16.
 */
$(document).ready(function(){

    var galleryId = 1;
    $('.projects').each( function() {
        $(this).find('a').attr('data-lightbox', 'projects');
    });
    // Set the link's `title` based on the image's `alt` attribute
    $('.projects').find('a').each( function() {
        var alt = $(this).find('img').attr('alt');
        $(this).attr('title', alt);
    });

    var socialMedia = {
        fb : "www.facebook.com/ermias.asmelash",
        twitter : "https://twitter.com/C443336007",
        ig : "https://www.instagram.com/the_ethiopianist/"
    };

    var sm = function(){
        var output = '<ul>',
            lists = document.querySelectorAll('.smIcons');

        for(var key in arguments[0]){
            output += '<li><a href="' + socialMedia[key] +'">' +
                '<img src="img/' + key + '.png" alt="icon for ' + key + '">' +
                '</a></li>';
        }

        output += '</ul>';

        for(var i = lists.length -1; i >= 0; i--){
            lists[i].innerHTML = output;
        }
    }(socialMedia);

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

