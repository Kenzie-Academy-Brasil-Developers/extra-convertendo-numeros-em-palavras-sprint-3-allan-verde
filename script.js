const tenName = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
const unitName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const hundredName = ['' ,'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

function numbersToWords() {
    let arrayNum = []

    for (let i = 0; i <= 1000; i++) {
        let n = String(i)
        if (i < 20) {
            arrayNum.push(tenName[i])
        } else if (i < 100) {
            if (n[1] == 0) {
                arrayNum.push(`${unitName[n[0]]}`)
            } else {
                arrayNum.push(`${unitName[n[0]]} e ${tenName[n[1]]}`)
            }
        } else if (i === 100) {
            arrayNum.push('cem')
        } else if (i < 1000) {
            if (n[2] == 0 && n[1] == 0) {
                arrayNum.push(`${hundredName[n[0]]}`)
            } else if (n[2]==0) {
                arrayNum.push(`${hundredName[n[0]]} e ${unitName[n[1]]}`)
            } else if (n[1] < 2) {
                arrayNum.push(`${hundredName[n[0]]} e ${tenName[Number(n[1]+n[2])]}`)
            } else if (n[1] == 0) {
                arrayNum.push(`${hundredName[n[0]]} e ${tenName[n[2]]}`)
            } else {
                arrayNum.push(`${hundredName[n[0]]} e ${unitName[n[1]]} e ${tenName[n[2]]}`)
            }
        } else {
            arrayNum.push('mil')
        }
    }

    return arrayNum
}

const arrayNumeroExtenso = numbersToWords()

const secaoEntradaTexto = document.querySelector('.secao_entradas_resultado')

const secaoResultadoTexto = document.querySelector('.secao_resultado_texto')
const textonumeroExtenso = arrayNumeroExtenso.join(', ')
secaoResultadoTexto.innerHTML = `${textonumeroExtenso}`

function converteNumPalavra() {
    secaoEntradaTexto.innerHTML = ''
    let numeroEntrada = Number(document.querySelector('.secao_entradas_entrada').value)
    let numeroExtenso = arrayNumeroExtenso[numeroEntrada]
    secaoEntradaTexto.innerHTML = `${numeroExtenso}`
}

function verificaEntrada() {
    let entradaRecebidaComprimento = document.querySelector('.secao_entradas_entrada').value.length
    let entradaRecebidaValor = Number(document.querySelector('.secao_entradas_entrada').value)
    if (entradaRecebidaComprimento < 1) {
        secaoEntradaTexto.innerHTML = `Por favor, insira um número`
    } else if (entradaRecebidaValor > 1000) {
        secaoEntradaTexto.innerHTML = `Erro. Tente novamente`
    } else {
        converteNumPalavra()
    }
}