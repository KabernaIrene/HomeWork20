/*
На сторінці є дві кнопки - переадресовується на інший сайт (за раніше введеним посиланням). 
Реалізувати перевірку на http/https. 
Якщо протокол не вказаний - додаємо
*/

const firstButton = document.querySelector('.youtube');
const secButton = document.querySelector('.hillel');
const body = document.querySelector('body');

firstButton.setAttribute('href', 'https://www.youtube.com/');
secButton.setAttribute('href', '//lms.ithillel.ua/');

body.appendChild(firstButton);
body.appendChild(secButton);


function protocol (event) {
    const link = event.target.href;
        
    if (link.startsWith('http') || link.startsWith('https')) {
        console.log(link);
    } else {
        const rightLink = link.replace('file', 'https');
        event.target.setAttribute('href', rightLink);
        console.log(rightLink);
    }
}

secButton.addEventListener('click', protocol);
firstButton.addEventListener('click', protocol);

