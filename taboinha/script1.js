const btn = document.querySelector('.btn');
const texto = document.querySelector('.cp')
 
btn.addEventListener('click',copiaTexto);

function copiaTexto(e){
   navigator.clipboard.writeText(texto.innerHTML)
   btn.classList.add('ativo');
   btn.innerText = ('Copiado');
}

setTimeout(()=>{
    btn.classList.remove('ativo');
    btn.innerText = ('Copiar');
}, 5000);

