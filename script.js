let body = document.getElementById('body');

window.addEventListener('DOMContentLoaded', ()=>{
    if (window.innerWidth === 375) {
        body.style.backgroundImage= "url\(\"images/bg-curvy-mobile.svg\")";
        body.style.backgroundPositionY= '33em';
    }
})