$(document).ready(function () {

    /* $('#btnSubmit').click(function() {
        alert(`yea boi`)
    }) */

    $(`<div></div>`).appendTo(`body`);

    //disables submit button
    $('input[type=submit]').click(function () {

        //alert($('input[type=text]').val())
        let inputVal = ($('input[type=text]').val())

       // $(`<h2>${inputVal}</h2>`).appendTo(`div`);
        $(`<li> ${inputVal} </li>`).appendTo(`div`);
            event.preventDefault()
            
           
            
           $('li').click(function(){
               let random = Math.floor((Math.random() * 8) + 1);
               //console.log(random)
              //e.currentTarget.style.color = colorsArray[random]
               $(this).css(`color`,colorsArray[random])
               
           });

           $(`li`).dblclick(function(){
                $(this).remove()
            
           });
            
            /*   $('h2').mouseover(function () {
                $(this).css({
                    'background-color': 'blue',
                    'border-radius': '7%',
                    'width': '40em'
                });
            }); */
            ($('input[type=text]').val(``))
        });
        
        
        $('input[type=submit]').attr('disabled', true)
        
        $('input[type=text]').keyup(function () {
            if ($('input[type=text]').val() === '') {
                $('input[type=submit]').attr('disabled', true)
            } else {
                $('input[type=submit]').attr('disabled', false)
            }
        });
        
        
    /* let msg = 'i am text';
    $(`<h1> ${msg}  </h1>`).appendTo('body'); */
    /* var inputVal =
    $(`<div></div>`).appendTo(`body`);
    $(`<h2></h2>`).appendTo(`div`);
    .appendTo(`h2`) */
    const colorsArray = [  //this is the array of colors that is called on in above 
        `blue`,
        `red`,
        `green`,
        `purple`,
        `yellow`,
        `brown`,
        `violet`,
        `lavender`]
})