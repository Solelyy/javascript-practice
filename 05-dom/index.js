const title = document.querySelector('h1');
const paragraph = document.querySelectorAll('.desc');
const clickBtn = document.getElementById('click-btn');

let isClicked = false;

clickBtn.addEventListener('click', () => {
    title.innerText = "Hello";
    paragraph.forEach(p => p.classList.toggle('desc-purple'));
    isClicked= true;
    console.log(`Button is clicked: ${isClicked}`);
})


