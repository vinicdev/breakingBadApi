const spaceText = document.querySelector('.spaceText')
let date = []

const loadApi = async () => {
    try {
        const url = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        date = await url.json()
        printDados(date)
        console.log(date)
    } catch {
        console.log(err)
    }
}

const printDados = (info) => {
    const htmlString = info
    .map((info) => {
        return `
            <h1 id="phrases">"${info.quote}"</h1>
            <small id="author">${info.author}</small>
        `;
    })
    .join('');
    spaceText.innerHTML = htmlString    
}

loadApi()