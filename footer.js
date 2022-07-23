let btn1 = document.querySelector('#international button');
let btn2 = document.querySelector('#help button');

let list = document.querySelectorAll('#international li');
console.log(list[0].style);

btn1.addEventListener('click', function () {
    expand('first')
});
btn2.addEventListener('click', function () {
    expand('second')
});

function expand(id) {
    let list;

    if (id == 'first') {
        list = document.querySelectorAll('#international li');
    }
    else {
        list = document.querySelectorAll('#help li');
    }

    let displayCheck = list[0].style.display;
    
    if (displayCheck == 'none' || displayCheck == '') {
        list.forEach(elm => {
            elm.style.display = 'block';
        });
    }
    else {
        list.forEach(elm => {
            elm.style.display = 'none';
        });
    }
}