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
            const [{setup, punchline}] = data;
            joke.textContent = `${setup} - ${punchline}`;
            joke.style.opacity = 1;
            jokeBtn.disabled = false;
        }, 2000);
        
    } catch (error) {
        joke.textContent = 'Something went wrong, please try again later.';
        console.log('Error: ', error);
        jokeBtn.disabled = false;
    } finally {
        jokeBtn.disabled = false;
    }
}

jokeBtn.addEventListener('click', fetchJoke);
