let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carroselDom = document.querySelector('.carrosel');
let listaItemDom = document.querySelector('.carrosel .lista');
let thumbnailDom = document.querySelector('.carrosel .thumbnail');


nextDom.onclick = function() {
    mostrarSlider('next');
}
prevDom.onclick = function() {
    mostrarSlider('prev');
}

let tempoRodado = 3000;
let tempoAuto = 7000;

let tempoLimite;
let rodarProxAuto = setTimeout(() => {
    next.click();
}, tempoAuto);

function mostrarSlider(tipo){
    let itemSlider = document.querySelectorAll('.carrosel .lista .item');
    let itemThumbnail = document.querySelectorAll('.carrosel .thumbnail .item');

    if(tipo === 'next' ){
        listaItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carroselDom.classList.add('next');
    }else{
        let ultimoItem = itemSlider.length - 1;
        listaItemDom.prepend(itemSlider[ultimoItem]);
        thumbnailDom.prepend(itemThumbnail[ultimoItem]);
        carroselDom.classList.add('prev');
    }

    clearTimeout(tempoLimite);
    tempoLimite = setTimeout(() => {
        carroselDom.classList.remove('next');
        carroselDom.classList.remove('prev');
    }, tempoRodado)

    clearTimeout(rodarProxAuto);
    rodarProxAuto = setTimeout(() => {
        next.click();
    }, tempoAuto);
}