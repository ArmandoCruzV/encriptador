const ENCRIPTAR = document.getElementById('encriptar');
ENCRIPTAR.addEventListener('click',
 function(){ 
    setTimeout(
        function(){
            offAnimacionEncriptar()
        },1000)
    
    animacionEncriptar()
})

function animacionEncriptar(){
    var engrane1 = document.getElementById('engrane1');
    var engrane2 = document.getElementById('engrane2');
    var engrane3 = document.getElementById('engrane3');
    var encriptar = document.getElementById('encriptar');
    var encriptarBoton = document.getElementById('encriptar-boton');
    engrane1.style.display = 'flex';
    engrane2.style.display = 'flex';
    engrane3.style.display = 'flex';
    encriptar.style.background = 'transparent';
    encriptarBoton.style.color = 'transparent';
    encriptarBoton.style.background = 'transparent';
}
function offAnimacionEncriptar(){
    var engrane1 = document.getElementById('engrane1');
    var engrane2 = document.getElementById('engrane2');
    var engrane3 = document.getElementById('engrane3');
    var encriptar = document.getElementById('encriptar');
    var encriptarBoton = document.getElementById('encriptar-boton');
    engrane1.style.display = 'none';
    engrane2.style.display = 'none';
    engrane3.style.display = 'none';
    encriptar.style.background = '';
    encriptar.style.transition = '1s'
    encriptarBoton.style.color = '';
    encriptarBoton.style.background = '';
    encriptarBoton.style.transition = '1s'
}

const DESENCRIPTAR = document.getElementById('desencriptar');
DESENCRIPTAR.addEventListener('click',
function(){
    setTimeout(
        function(){
            offAnimacionDesencriptar()
        },1000)
    
    animacionDesencriptar()
});

function animacionDesencriptar(){
    var llave = document.getElementById('llave');
    var candado = document.getElementById('candado');
    var candadoOn = document.getElementById('candadoOn');
    var desencriptar = document.getElementById('desencriptar');
    var desencriptarBoton = document.getElementById('desencriptar-boton');
    llave.style.display = 'flex';
    candado.style.display = 'flex';
    candadoOn.style.display = 'flex';
    desencriptar.style.background = 'transparent';
    desencriptarBoton.style.color = 'transparent';
    desencriptarBoton.style.background = 'transparent';
}
function offAnimacionDesencriptar(){
    var llave = document.getElementById('llave');
    var candado = document.getElementById('candado');
    var candadoOn = document.getElementById('candadoOn');
    var desencriptar = document.getElementById('desencriptar');
    var desencriptarBoton = document.getElementById('desencriptar-boton');
    llave.style.display = 'none';
    candado.style.display = 'none';
    candadoOn.style.display = 'none';
    desencriptar.style.background = '';
    desencriptar.style.transition = '1s'
    desencriptarBoton.style.color = '';
    desencriptarBoton.style.background = '';
    desencriptarBoton.style.transition = '1s'
}

var asideTextareaMobile = document.getElementById('asideTextarea-mobile');
var valueInputMobile = document.getElementById('area-mobile');
var valueInput = document.getElementById('area');
var btnEncriptar = document.getElementById('encriptar-boton');
var btnEncriptarMobile = document.getElementById('encriptar-boton-mobile');
var onMensaje = document.getElementById('onMensaje')
var asideTextarea = document.getElementById('asideTextarea');
var aside = document.querySelector('aside');
var textoAside = document.getElementById('texto-aside');
var copiarTexto = document.getElementById('copiar_texto');
var btnDesencriptar = document.getElementById('desencriptar-boton');
var btnDesencriptarMobile = document.getElementById('desencriptar-boton-mobile');
//Funciones para animar e texto del output

const maquinaDeEscribir = (text = '',tiempo = 200,etiqueta = '') => {
    let caracteres = text.split('');
    let contador = 0;
    etiqueta.value = '';
    let escribir = setInterval(function(){
        etiqueta.value += caracteres[contador]
        contador++
        if(contador === caracteres.length){
            clearInterval(escribir)
        }
    }, tiempo)
}

function offMensaje(){
    onMensaje.style.display = 'grid';
    asideTextarea.style.display = 'none';
    textoAside.style.display = 'none';
    aside.style.display = 'grid';
    copiarTexto.style.display = 'none';

    if (valueInput.value == '') {
       textoAside.style.display = 'grid';
    }
    else{
        onMensaje.style.display = 'none';
        asideTextarea.style.display = 'block';
        aside.style.display = 'block';
        copiarTexto.style.display = 'block';
        texto()
        valueInput.value = '';
    }    
}

function offMensaje2(){
    let textoValues = (valueInput.value).split('u');
    onMensaje.style.display = 'grid';
    asideTextarea.style.display = 'none';
    textoAside.style.display = 'none';
    aside.style.display = 'grid';
    copiarTexto.style.display = 'none';

    if (valueInput.value == '') {
       textoAside.style.display = 'grid';
    }else if(textoValues.includes('mia')){
        onMensaje.style.display = 'none';
        asideTextarea.style.display = 'block';
        aside.style.display = 'block';
        copiarTexto.style.display = 'block';
        texto2()
    }else{
        onMensaje.style.display = 'none';
        asideTextarea.style.display = 'block';
        aside.style.display = 'block';
        copiarTexto.style.display = 'block';
        asideTextarea.value = 'Lo sentimos el texto que ingreso no se puede desencriptar';
    }    valueInput.value = '';
}

function offMensajeMobile(){ 
    if (valueInputMobile.value == '') {
        valueInputMobile.value = 'Texto no encontrado';
    }else{
        alert('Por favor espera a que termine de cargar los "miuuus" antes de desencriptar');
    textoMobile();
    }
    ///colocar imagenes
}

function offMensajeMobile2(){
    let textoValues = (valueInputMobile.value).split('u');
        
    if (valueInputMobile.value == '') {
        valueInputMobile.value = 'Texto no encontrado';
    }else if (textoValues.includes('mia')){
        texto2Mobile();
    }else{
        valueInputMobile.value = 'Lo sentimos el texto que ingreso no se puede desencriptar';
    }
}

btnDesencriptarMobile.addEventListener('click', function(){
    offMensajeMobile2();
})

btnEncriptarMobile.addEventListener('click', function(){
    offMensajeMobile();
})

btnEncriptar.addEventListener('click', function(){
    offMensaje()
})

btnDesencriptar.addEventListener('click', function(){
    offMensaje2();
})

function copiar(){
    asideTextarea.select();
    document.execCommand('copy');
} 

function copiarMobileText(){
    valueInputMobile.select();
    document.execCommand('copy');
}

//LOGICA DE ENCRIPTACION
const codi = [];

for (let index = 97; index <= 122; index++) {
    codi.push(String.fromCharCode(index));
}

const textoInicial = ['miauuuu'];
var textoDuplicador = 'miauuu';
for (let index = 0; index < 25; index++) {
    textoInicial.push(textoInicial[index] + textoDuplicador);   
}

var b = 0;
var miObjecto = codi.reduce((obj, item) => {
    obj[item] = textoInicial[(b++)];
    return obj;
},{});

miObjecto.A = ' ';
miObjecto.B = 'A'; 

function texto(){
    const texto1 = [];
    const texto = valueInput.value;
    const espacios = texto.replaceAll(' ','A');
    const text = espacios.split('');

for (let index = 0; index < text.length; index++) {
        texto1.push(miObjecto[text[index]]);
}

textoInputString = texto1.toString();
let textoSinComa =  textoInputString.replaceAll(',','');
let textoSinComa3 =  textoSinComa.replaceAll(' ','MiauU');
maquinaDeEscribir(textoSinComa3, 5, asideTextarea);
}
//mobile
function textoMobile(){
    const texto1 = [];
    const texto = valueInputMobile.value;
    const espacios = texto.replaceAll(' ','A');
    const text = espacios.split('');

for (let index = 0; index < text.length; index++) {
        texto1.push(miObjecto[text[index]]);
}

textoInputString = texto1.toString();
let textoSinComa =  textoInputString.replaceAll(',','');
let textoSinComa3 =  textoSinComa.replaceAll(' ','MiauU');

maquinaDeEscribir(textoSinComa3, 5,valueInputMobile);
}

//mobile desencriptador
function texto2Mobile(){
    const texto = valueInputMobile.value;

    ////////////
    const espacios = texto.replaceAll('MiauU',',A,');
    /////////////

    const textoSeparado = espacios.replaceAll('miauuuu',',miauuuu');
    const textoArray = textoSeparado.split(',');

const texto4 = Object.entries(miObjecto);
const encriptarArray = [];

textoArray.map(function(item){
    for (let index = 0; index < texto4.length; index++) {
        if (item == texto4[index][1]) {
            encriptarArray.push(texto4[index][0]);
        }
    }
})

const encriptarString = encriptarArray.toString();
let textoSinComa =  encriptarString.replaceAll(',','');
let textoSinComa2 =  textoSinComa.replaceAll('B',' ');
maquinaDeEscribir(textoSinComa2, 50, valueInputMobile)

}

/////
function texto2(){
    const texto = valueInput.value;

    ////////////
    const espacios = texto.replaceAll('MiauU',',A,');
    /////////////

    const textoSeparado = espacios.replaceAll('miauuuu',',miauuuu');
    const textoArray = textoSeparado.split(',');

const texto4 = Object.entries(miObjecto);
const encriptarArray = [];

textoArray.map(function(item){
    for (let index = 0; index < texto4.length; index++) {
        if (item == texto4[index][1]) {
            encriptarArray.push(texto4[index][0]);
        }
    }
})

const encriptarString = encriptarArray.toString();
let textoSinComa =  encriptarString.replaceAll(',','');
let textoSinComa2 =  textoSinComa.replaceAll('B',' ');
maquinaDeEscribir(textoSinComa2, 50, asideTextarea)

}
