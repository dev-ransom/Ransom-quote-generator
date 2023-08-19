const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter'),
quoteBtn = document.querySelector('button');


function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote . . .';
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');
    });

}

soundBtn.addEventListener('click', ()=>{
// console.log('sounded')
let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
speechSynthesis.speak(utterance)
let utterance2 = new SpeechSynthesisUtterance(`${authorName.innerText}`);
speechSynthesis.speak(utterance2)
});

quoteBtn.addEventListener('click', randomQuote);

