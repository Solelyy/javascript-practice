const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('fetchJokeBtn');

async function fetchJoke() {
    try {
        jokeBtn.disabled = true;
        joke.style.opacity = .4;
        joke.textContent = 'Getting a goofy joke for u...';
        const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
        const data = await response.json();
        setTimeout(() => {
            joke.textContent = `${data[0].setup} - ${data[0].punchline}`;
            joke.style.opacity = 1;
            jokeBtn.disabled = false;
        }, 2000);
        
    } catch (error) {
        joke.textContent = 'Something went wrong, please try again later.';
        console.log('Error: ', error);
        jokeBtn.disabled = false;
    }
}

jokeBtn.addEventListener('click', fetchJoke);
