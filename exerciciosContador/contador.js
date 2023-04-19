

function contar(){

let ini = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    window.alert ('ERRO VERIFIQUE OS NUMEROS')

}else {
    res.innerHTML = ''
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0 ){
        window.alert ('passo considerado = 1')
        p = 1
    }if (i<f){
        for(let c= i; c <= f; c +=p){
            res.innerHTML +=`${c}\u{1F600} `
            res.style.background='#ffffff';
            res.style.boxShadow='1px -1px 13px #000000'
        }

    }else {
        for(let c = i; c>=f; c -=p){
            res.innerHTML +=`${c}\u{1F600}`
            res.style.background='#ffffff';
            res.style.boxShadow='1px -1px 13px #000000'


        }
    }
passo.value=''    
fim.value=''
ini.value=''
ini.focus()
}
}