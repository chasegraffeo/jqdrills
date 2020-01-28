/* $(`.boo`).click(function() { //works
    console.log(`hello`)
}) 


$(`h1`).css({// works
    'font-size': '4em',
    'background-color': 'red',
    'color': 'blue',
    'text-align': 'center'
});
 */

//let $para = $('<p> I am A PARAGRAPH!</p>'); // doesnt
//$($para).appenTo('body');
 
/* test 
let msg = `i am text!`;
$(`<p> ${msg} </p>`).appendTo(body); */

/* function addListItem() {
    let list = document.getElementById(`grocery-list`);
    let item = document.createElement(`li`);
    item.innerText = `milk & bread`;
    list.appendChild(item)
}

$('#boo').click(function(){
    //$('#grocery-list').append('<li>apples & Oranges</li>'); //works
    let item ='<li class="red"> Apples & Oranges</li>';
    $('#grocery-list').append(item);
});
$('#style').click(function() {
    $('.red').css('color', 'red');
});

$(document).ready(function() {
    $('<div></div>').css({
        'background-color':'blue',
        'height': '100px',
        'width': '100px'
    }).insertAfter('#grocery-list');
});
 */