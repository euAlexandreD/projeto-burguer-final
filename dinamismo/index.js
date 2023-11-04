const cadastrar = () => {
    let popUp = document.querySelector("#section-cadastro").style.opacity = 1
}

const logar = () => {
    let popUp = document.querySelector('#section-login').style.opacity = 1
}

const sairDoCadastro = () => {
    let popUp = document.querySelector('#section-cadastro').style.opacity = 0
}

const sairDoLogin = () => {
    let popUp = document.querySelector('#section-login').style.opacity = 0
}

let time = 2000
let primeiraImagem = 0
let imagens = document.querySelectorAll('#section-img img')
max = imagens.length;

function trocarImagem() {
    imagens[primeiraImagem].classList.remove("primeira")
    primeiraImagem++

    if (primeiraImagem >= max) {
        primeiraImagem = 0
    }
    imagens[primeiraImagem].classList.add("primeira")
}

function start() {
    setInterval(() => {
        trocarImagem()
    }, time);
}

window.addEventListener('load', start())
