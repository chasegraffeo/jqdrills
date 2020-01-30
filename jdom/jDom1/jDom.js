document.addEventListener(`DOMContentLoaded`, function () {
    let button = document.createElement(`button`);
    let aText = document.createTextNode(`Alert!`);
    button.appendChild(aText);
    document.body.appendChild(button);


    let form = document.createElement(`form`);
    document.body.appendChild(form);

    let input = document.createElement(`input`)
    form.appendChild(input);
    input.value = ""

    let buton = document.createElement(`button`)
    let bText = document.createTextNode(`Submit`)
    buton.appendChild(bText)
    form.appendChild(buton)


    button.addEventListener(`click`, function () {
        alert(`ALLMIGHT!!`);
    });

    buton.addEventListener('click', function() {
        alert(input.value)
    });

    let div = document.createElement(`div`);
    div.classname = `h`
    document.body.appendChild(div);
    div.style.backgroundColor = null;
    div.style.height = "5em";
    div.style.width = "10em";
    div.addEventListener(`mouseover`, function () {
        div.style.backgroundColor = `blue`
    });
    div.addEventListener(`mouseout`, function () {
        div.style.backgroundColor = null
    });

    let p = document.createElement(`p`);
    let ptext = document.createTextNode(`I AM HERE!!`);
    document.body.appendChild(p);
    p.appendChild(ptext);

    p.addEventListener(`click`,function(){
        p.style.color = getRandomColor();
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let buttonThree = document.createElement(`button`);
    let threeText = document.createTextNode(`My Name`);
    let divTwo = document.createElement(`div`);
    divTwo.id = `two`
    buttonThree.appendChild(threeText);
    divTwo.appendChild(buttonThree);
    document.body.appendChild(divTwo);

    buttonThree.addEventListener(`click`, function () {
        let span = document.createElement(`span`);
        let spnText = document.createTextNode(`Chase Graffeo `);
        span.appendChild(spnText);
        two.append(span);
        
        
        
    });

    let buttonFour = document.createElement(`button`);
    let fourText = document.createTextNode(`Friends Name`);
    let divThree = document.createElement(`div`);
    //let ul = document.createElement(`ul`)
    //divThree.appendChild(ul)
    buttonFour.appendChild(fourText);
    divThree.appendChild(buttonFour);
    document.body.appendChild(divThree); 

    let friends = [`Liam`,`Brie`,`Tanner`,`Bailey`,`Anna`,`Hetal`,`Goku`,`Gohan`,`Light`,`Tidus`]

    buttonFour.addEventListener(`click`, function(){
        let randomIndex = Math.floor(Math.random() * 10);
        let randomFriend = friends[randomIndex];
        let li = document.createElement(`li`);
        li.textContent = randomFriend;
        divThree.append(li);
    })

})
