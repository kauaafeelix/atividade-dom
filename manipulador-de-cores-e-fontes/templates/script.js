const body = document.getElementById('body')
const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const corDeFundo = document.getElementById('altera-cor-de-fundo')
const corDoTitulo = document.getElementById('altera-cor-do-titulo')
const corDoParagrafo = document.getElementById('altera-cor-do-paragrafo')
const fonteDoTitulo = document.getElementById('altera-fonte-do-titulo')
const fonteDoParagrafo = document.getElementById('altera-fonte-do-paragrafo')
const alteraTudo = document.getElementById('altera-tudo')

const fontes = ['Roboto', 'Stack Sans Notch', 'Momo Signature',
    'Momo Trust Display','Oswald', 'Playfair Display', 'Sixtyfour',
    'Sigmar One', 'Nosifer', 'Henny Penny', 'Indie Flower', 'Lacquer',
    'Kranky', 'Almendra Display', 'Delius Unicase']
 
function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}


corDeFundo.addEventListener('click', () => {
    body.style.background = gerarCorAleatoria()
    console.log("cor de fundo alterada. ")
})

corDoTitulo.addEventListener('click', ()=>{
    titulo.style.color = gerarCorAleatoria()
    console.log("cor do titulo alterada")
})

corDoParagrafo.addEventListener('click', ()=>{
    paragrafo.style.color = gerarCorAleatoria()
    console.log("cor do paragrafo alterada")
})


function gerarFonteAleatoria(){
    const indiceFonte = Math.floor(Math.random() * fontes.length);
    return fontes[indiceFonte]
}

fonteDoTitulo.addEventListener('click', () =>{
    titulo.style.fontFamily = gerarFonteAleatoria()
    console.log("altera fonte do titulo")
})

fonteDoParagrafo.addEventListener('click', ()=>{
    paragrafo.style.fontFamily = gerarFonteAleatoria()
    console.log("altera fonte do parágrafo")
})

alteraTudo.addEventListener('click', () => {
    body.style.background = gerarCorAleatoria()
    titulo.style.color = gerarCorAleatoria()
    paragrafo.style.color = gerarCorAleatoria()
    titulo.style.fontFamily = gerarFonteAleatoria()
    paragrafo.style.fontFamily = gerarFonteAleatoria()
    console.log("Faz tudo de uma vez kkk")
})






