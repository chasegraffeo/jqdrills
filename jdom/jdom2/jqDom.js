$(document).ready(function () {
    $('<div class = "container"><button class = "btn1">alert</button></div>').appendTo('body');

    $('.btn1').click(function () {
        alert('All Might!!');
    });


    $('<form><input type = "text"><input type = "submit" ></form>').appendTo('body')

    $('input[type=submit]').click(function () {
        alert($('input[type=text]').val())
    })

    $('<div class = "content" style="width: 150px; height: 150px; background-color: red"></div>').appendTo('body')
    /* $('.content').css({ this iss another way to style
        'width': '150px',
        'height': '150px',
        'background-color': 'red'
    }) */

    $('.content').hover(function () {
        $(this).css('background-color', 'blue');
    }, function() {
        $(this).css('background-color', 'red');

    });

    $('<p>life</p>').appendTo('body');

})