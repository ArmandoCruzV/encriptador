const inputText = document.getElementById('area-mobile');
const clicEncrip = document.getElementById('encriptar-mobile');
const clicDesencrip = document.getElementById('desencriptar-mobile');

const codigo = [
{
    a:'!',
    b:'"',
    c:'$',
    d:'%',
    e:'&',
    f:'/',
    g:'(',
    h:')',
    i:'=',
    j:'?',
    k:'¿',
    l:'-',
    m:'_',
    n:'¡',
    ñ:'{',
    o:'}',
    p:'[',
    q:']',
    r:'#',
    s:'1',
    t:'2',
    u:'3',
    v:'4',
    w:'5',
    x:'6',
    y:'7',
    z:'8',
    ' ':'9'
}
]
let primer = codigo[0]


clicEncrip.addEventListener('click',function(){
    let input = inputText.value.toLowerCase().split('')
    const regex = /[^a-zA-ZñÑ\s]/

    if(regex.test(inputText.value)){
        alert('NO VÁLIDO, utiliza únicamente letras!')
        inputText.value = ''
    }
    else {
       inputText.value = ''
       input.forEach(function(item){
            inputText.value = inputText.value + primer[item]
        })
    }
})


clicDesencrip.addEventListener('click',function(){
    let input = inputText.value.split('')
    const texto = []
    inputText.value = ''

    function encontrar(obj,val){
        for (const clave in obj) {
            if (obj.hasOwnProperty(clave) && obj[clave] === val) {
                return clave;
            }
        }
        return null;
    }

    const primerValues = Object.values(primer)
    const primerKeys = Object.keys(primer)
    const inputEncriptado = input.join('')

    const includeValues = primerValues.find(item => 
       inputEncriptado.includes(item)
    )
    const includeKeys = primerKeys.find(item => 
        inputEncriptado.includes(item)
     )

    if (includeValues && !includeKeys) { 
    for (let index = 0; index < input.length; index++) {
        const valor = input[index]
        const encontrada = encontrar(primer, valor)
        if (encontrada){
            texto.push(encontrada)
        }
    }

    inputText.value = texto.join('')
    } else {
        alert('NO VÁLIDO, no debe incluir letras!')
        inputText.value = ''
    }
})


//////pc 
const textEncriptar = document.getElementById('area')
const textDesencriptar = document.getElementById('asideTextarea')
const btnEncriptar = document.getElementById('encriptar')
const btnDesencriptar = document.getElementById('desencriptar')
const imgPersona = document.getElementById('onMensaje')
const textoAside = document.getElementById('texto-aside')
const btnCopy = document.getElementById('copiar_texto')

btnEncriptar.addEventListener('click',function(){   
    imgPersona.style.display = 'none'
    btnCopy.style.display = 'grid'
    
    let input = textEncriptar.value.toLowerCase().split('')
    const regex = /[^a-zA-ZñÑ\s]/

    if(regex.test(textEncriptar.value)){
        alert('NO VÁLIDO, utiliza únicamente letras!')
        textDesencriptar.value = ''
        textEncriptar.value = ''   
        textDesencriptar.style.display = 'none' 
        imgPersona.style.display = 'grid'
        textoAside.style.display = 'grid' 
    }
    else {
       textDesencriptar.style.display = 'flex' 
       textDesencriptar.value = ''
       textEncriptar.value = ''
       input.forEach(function(item){
            textDesencriptar.value = textDesencriptar.value + primer[item]
        })
    }
})



btnDesencriptar.addEventListener('click',function(){
    let input = textEncriptar.value.split('')
    const texto = []
    textEncriptar.value = ''
    textDesencriptar.value = ''

    function encontrar(obj,val){
        for (const clave in obj) {
            if (obj.hasOwnProperty(clave) && obj[clave] === val) {
                return clave;
            }
        }
        return null;
    }

    const primerValues = Object.values(primer)
    const primerKeys = Object.keys(primer)
    const inputEncriptado = input.join('')

    const includeValues = primerValues.find(item => 
       inputEncriptado.includes(item)
    )
    const includeKeys = primerKeys.find(item => 
        inputEncriptado.includes(item)
     )

    if (includeValues && !includeKeys) { 
    for (let index = 0; index < input.length; index++) {
        const valor = input[index]
        const encontrada = encontrar(primer, valor)
        if (encontrada){
            texto.push(encontrada)
        }
    }
    textEncriptar.value = ''
    textDesencriptar.value = texto.join('')
    } else {
        alert('NO VÁLIDO, no debe incluir letras!')
        textEncriptar.value = ''
    }
})

///Funcion de copiar pc
function copiar(){
    textDesencriptar.select()
    document.execCommand('copy')
    window.getSelection().removeAllRanges()   
    alert(textDesencriptar.value)
}
//funcion de copiar mobile
function copiarMobileText(){
    inputText.select()
    document.execCommand('copy')
    window.getSelection().removeAllRanges()   
    alert(inputText.value)
}