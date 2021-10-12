const tenName = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
const unitName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const hundredName = ['' ,'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

function numbersToWords() {
    let arrayNum = []
    let n

    for (let i = 0; i <= 1000; i++) {
        let n = String(i)
        if (i < 20) {
            arrayNum.push(tenName[i])
        } else if (i < 100) {
            if (n[1] === 0) {
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
numbersToWords()
