function carregar() {
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    //BOM DIA
    imagem.src = 'assets/manha.jpg';
    document.body.style.background = '#e2cd9f';
} else if (hora >= 12 && hora <= 18) { 
    //BOA TARDE
    imagem.src = 'assets/tarde.jpg';
    document.body.style.background = '#b9f573'
} else {
    //BOA NOITE
    imagem.src = 'assets/noite.jpg';
    document.body.style.background = '#515154'
}