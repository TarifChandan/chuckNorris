const btn = document.querySelector('.btn');
const img = document.querySelector('img');
const para = document.querySelector('p');

const jokes = [
    {
        joke: 'Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.'
    },
    {
        joke: 'Time waits for no man. Unless that man is Chuck Norris.'
    },
    {
        joke: 'In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.'
    },
    {
        joke: 'When God said, “Let there be light!” Chuck said, “Say Please.”'
    },
    {
        joke: 'Chuck Norris’ tears cure cancer. Too bad he has never cried.'
    },
    {
        joke: 'Chuck Norris once shot an enemy plane down with his finger, by yelling, “Bang!”'
    },
    {
        joke: 'Chuck Norris does not use spell check. If he happens to misspell a word, Oxford will change the spelling.'
    },
    {
        joke: 'Chuck Norris’ calendar goes straight from March 31st to April 2nd, because no one fools Chuck Norris.'
    },
    {
        joke: 'Chuck Norris can have both feet on the ground and kick butt at the same time.'
    },
    {
        joke: 'Death once had a near-Chuck-Norris experience.'
    },

]




btn.addEventListener('click', () => {
    para.innerHTML = ''

    const randomNum = Math.floor(Math.random() * 2) + 1;
    const randomJoke = Math.floor(Math.random() * 10);

    img.style.animation = `shake${randomNum} .5s linear`
    setTimeout(() => {
        img.style.animation = ''
    }, 500)

    para.textContent = jokes[randomJoke].joke;


})