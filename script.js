const tenName = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
const unitName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const hundredName = ['' ,'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

// function numbersToWords() {
//     let arrayNum = []
//     for (let i = 0; i <= 20; i++) {
//         arrayNum.push(tenName[i])
//     }
//     console.log(arrayNum)
//     return arrayNum
// }
// numbersToWords()
function numbersToWords() {
    let arrayNum = []
    let num

    for (let i = 0; i <= 1000; i++) {
        
        if (i < 20) {
            arrayNum.push(tenName[i])
        
        } else if (i < 100) {
            num = String(i).split('')
            
            if (num[1] == 0) {
                arrayNum.push(unitName[num[0]])
            
            } else {
                arrayNum.push(`${unitName[num[0]]} e ${tenName[num[1]]}`)
            
            }
        } else if (i == 100) {
            arrayNum.push('cem')
        }else if ( i < 120) {
            num = String(i)
            let num1 = Number(num[1]+num[2])
            arrayNum.push(`${hundredName[num[0]]} e ${tenName[num1]}`)
        } else {
            num = String(i)
            if (num[1] == 0 && num[2] == 0) {
                arrayNum.push(`${hundredName[num[0]]}`)
            } else if (num[1] == 0 && num[2] != 0) {
                arrayNum.push(`${hundredName[num[0]]} e ${tenName[num[2]]}`)
            } else if (num[2] == 0) {
                arrayNum.push(`${hundredName[num[0]]} e ${unitName[num[1]]}`)
            } else {
                arrayNum.push(`${hundredName[num[0]]} e ${unitName[num[1]]} e ${tenName[num[2]]}`)
            }
        }
    }
    console.log(arrayNum)
    return arrayNum
}
numbersToWords()