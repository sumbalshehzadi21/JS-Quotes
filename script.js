AOS.init();
let displayQuote = '';
let quotes = document.getElementById('quotes')
let author = document.getElementById('author')
let btn = document.getElementById('btn')

const newQuotes = async () => {
    let rd =Math.ceil(Math.random()*16);
    console.log(rd)
    document.getElementById('quotes').innerText=`${ displayQuote[rd].text}`
    author.innerHTML=`${ displayQuote[rd].author}`;
    if(`${ displayQuote[rd].author}`=='type.fit'){
        author.innerText=`Unknown`;
    }
    else{
        author.innerText=`${ displayQuote[rd].author}`; 
    }
}

const Quotes = async () => {
    try {
        let api = 'https://type.fit/api/quotes';
        let data = await fetch(api);
        displayQuote = await data.json();
        console.log(displayQuote);
        newQuotes();
    } catch (error) {

    }
}
Quotes();
btn.addEventListener('click', Quotes);