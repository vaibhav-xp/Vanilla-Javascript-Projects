const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
const lowercaseSet = "abcdefghijklmnopqrestuvwxyz"
const numbersSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

const screenValue = document.getElementById('display')
const totalChar = document.getElementById('total-char')
const upperInput = document.getElementById('uppercase')
const lowerInput = document.getElementById('lowercase')
const numberInput = document.getElementById('numbers')
const symbolInput = document.getElementById('symbols')


const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}
password = ""

const generatePassword = (password) => {
    if(upperInput.checked){
        password += getRandomData(uppercaseSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowercaseSet)
    }
    if(numberInput.checked){
        password += getRandomData(numbersSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    screenValue.value = password
}


document.getElementById('btn').addEventListener('click', function(){
    generatePassword(password);
})
