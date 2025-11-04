const blocoContador = document.getElementById('bloco-contador');
const blocoAumentar = document.getElementById('bloco-aumentar');
const blocoDiminuir = document.getElementById('bloco-diminuir');


let contador = 0;
blocoContador.querySelector('p').textContent = contador;

blocoAumentar.addEventListener('click', () => {
    contador += 1;
    blocoContador.querySelector('p').textContent = contador;
});

blocoDiminuir.addEventListener('click', () => {
    contador -= 1;
    blocoContador.querySelector('p').textContent = contador;
}); 