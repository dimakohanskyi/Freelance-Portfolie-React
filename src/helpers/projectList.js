import projects01 from './../img/projects/01.jpg';
import projects01Big from './../img/projects/01-big.jpg';


import projects02 from './../img/projects/02.jpg';
import projects02Big from './../img/projects/02-big.jpg';


import projects03 from './../img/projects/03.jpg';
import projects03Big from './../img/projects/03-big.jpg';



const projects = [

    {
       title: "Furniture Store",
       skills: 'PosgreSQL, Django, Python, JavaScript, JQuery, HTML, SCSS',
       img: projects01,
       imgBig: projects01Big,
       gitHubLink: 'https://github.com/dimakohanskyi/mystore'
    },

    {
        title: "Crypto Wallet",
        skills: 'PosgreSQL, Django, Python, JavaScript, JQuery, HTML, SCSS',
        img: projects02,
        imgBig: projects02Big,
        gitHubLink: 'https://github.com/dimakohanskyi/crypto_tracker'
    },

    {
        title: "Parser sellery info",
        skills: 'SqLite, Python, Selenium, aiogram',
        img: projects03,
        imgBig: projects03Big,
        gitHubLink: 'https://github.com/dimakohanskyi/Djini-Selenium'
    }
    
]


export {projects};