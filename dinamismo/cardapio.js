const cardapio = document.querySelector('ul')
let meuCardapio = ''
const buttonShowAll = document.querySelector('.button-show-all')

const showAll = () => {
    meuCardapio.forEach(opcoes => {
        meuCardapio = `
        <li>
            <img src=${opcoes.src}>
            <p>${opcoes.name}</p>
            <pclass="item-price>R$ ${opcoes.price}</p>
        </li>
    `
    })
    
    cardapio.innerHTML = meuCardapio
}

buttonShowAll.addEventListener('click', showAll)

