let body = document.getElementById('body');
let error = document.getElementById('displayerror');
let inputemail = document.getElementById('inputemail');
let btnsubmit = document.getElementById('btnsubmit');

//regex to verify email
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


if (window.innerWidth <= 568) {
    body.style.backgroundImage = "url\(\"images/bg-curvy-mobile.svg\")";
    body.style.backgroundPositionY = '11%';
    
}else if (window.innerWidth <= 768) {
    body.style.backgroundImage = "url\(\"images/bg-curvy-desktop.svg\")";
    body.style.backgroundPositionY = '13%';

}else if (window.innerWidth <= 1440) {
    body.style.backgroundImage = "url\(\"images/bg-curvy-desktop.svg\")";
    body.style.backgroundPositionY = '19%';

}

btnsubmit.addEventListener('click', () => {
    if (regex.test(inputemail.value) === false) {
        error.style.color = 'hsl(0, 100%, 63%)';
        error.style.textAlign = 'left';
        error.innerText = 'Please enter a valid email adress';
    }
    inputemail.addEventListener('input', (e) => {
        value = e.currentTarget.value;
        if (regex.test(value)) {
            error.innerText = '';
        } else {
            error.innerText = 'Please enter a valid email adress';
        }
    })
})


