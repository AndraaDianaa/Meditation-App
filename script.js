const play = document.querySelector(".playbtn");
const main = document.querySelector(".container");
const song = document.querySelector(".play-container");
const back = document.querySelector(".backbtn");
const audio = document.querySelector('.playbtn');



play.addEventListener('click', () => {
    song.classList.toggle('hide')
    main.classList.toggle('hide')
});

back.addEventListener('click', () => {
    song.classList.toggle('hide')
    main.classList.toggle('hide')
});

function playMusic () {
    let audio =  new Audio("sleep.mp3");
    audio.play();
}
play.addEventListener('click', playMusic);

