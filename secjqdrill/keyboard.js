$(document).ready(function () {
    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];

    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];
    let words = 54;
    var timer = false
    let mistakes = 0;
    let gameover = false;

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $('#keyboard-upper-container').hide();


    $(document).keydown(function (e) {

        if (e.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });

    $(document).keyup(function (e) {
        $('.highlight').removeClass('highlight')
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
    });

    $(document).keypress(function (e) {
        $('#' + e.keyCode).addClass('highlight')
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            
            letterIndex++;
            $('#yellow-block').css('left', '+=17.5px');
            $('#feedback').append('<Span class="glyphicon glyphicon-ok" ></Span>');
        } else {
            $('#feedback').append('<Span class="glyphicon glyphicon-remove" ></Span>');
        }
        currentLetter = currentSentence[letterIndex]
        $('#target-letter').text(currentLetter);
        
        if(timer === false){
            timer = true;
            startTime = Date.now();
        }

        if (letterIndex == currentSentence.length) {
            sentIndex++;
            console.log(sentIndex);
            if (sentIndex == sentences.length) {
                gameover = true;

                //alert(`Game Over!`)
            }


            if (!gameover) {
                letterIndex = 0;
                currentSentence = sentences[sentIndex];
                currentLetter = currentSentence[letterIndex]
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                $('#yellow-block').css('left', '17.5px');
                $('#feedback').empty();
                $('#feedback').stop()
            };

            if (gameover == true) {
                $('#sentence').empty();
                $('<button class= "btn1">PLAY AGAIN</button>').appendTo('#sentence');
                $('.btn1').click(function () {
                    location.reload(true)
                });
                $('#target-letter').empty();
               $('#yellow-block').css('left', '2000px')
                $('#feedback').remove()
                // console.log(gameover)

                if(timer === true){
                    finishTime = Date.now() - startTime;
                    var x = Math.floor(finishTime/words)
                    console.log(x)
                }
            }
        };
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);
    });
})
//Date.now
/* sentIndex++;
currentSentence = sentences[sentIndex];
$('#sentence').text(currentSentence); */