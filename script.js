const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    if (toggle.classList.contains('bi-brightness-high-fill')) {
        toggle.classList.replace('bi-brightness-high-fill', 'bi-moon')
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'

    }
    else {
        toggle.classList.replace('bi-moon', 'bi-brightness-high-fill')
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s'
    }
})