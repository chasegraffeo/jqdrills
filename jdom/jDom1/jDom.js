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

    buton.addEventListener('click', () => {
        alert(input.value)
    })

    let div = document.createElement(`div`);
    div.classname = `h`
    document.body.appendChild(div);
    div.style.backgroundColor = "red";
    div.style.height = "5em";
    div.style.width = "10em";
    div.addEventListener(`mouseover`, function () {
        div.style.backgroundColor = `blue`
    });
    div.addEventListener(`mouseout`, function () {
        div.style.backgroundColor = `red`
    });

    let p = document.createElement(`p`);
    let ptext = document.createTextNode(`I AM HERE!!`);
    document.body.appendChild(p);
    p.appendChild(ptext);

    p.addEventListener(`click`,function(){
        p.style.color = toHex(s)
    })

/* function toHex(s) {
        {
            if (s.substr(0, 2).toLowerCase() == "0x") {
                return s;
            }

            var l = "0123456789ABCDEF";
            var o = "";

            if (typeof s != "string") {
                s = s.toString();
            }
            for (var i = 0; i < s.length; i++) {
                var c = s.charCodeAt(i);

                o = o + l.substr((c >> 4), 1) + l.substr((c & 0x0f), 1);
            }

            return "0x" + o;
        }
    } */
})