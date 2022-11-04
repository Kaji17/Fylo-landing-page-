let bgwave = document.getElementById('wavebg');

if (window.innerWidth <= 375) {
    bgwave.removeAttribute('src');
    bgwave.setAttribute("src", "images/bg-curvy-mobile.svg");
}