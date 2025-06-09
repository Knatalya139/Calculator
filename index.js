console.log(document.getElementById('num2').value, "test")




document.getElementById('output_button_submit').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(document.getElementById('num2').value)
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('operator').value)

    let number1 = document.getElementById('num1').value
    let number2 = document.getElementById('num2').value
    let operator = document.getElementById('operator').value
    let result

    let checkpienum1 = document.getElementById('num1').value

    console.log(checkpienum1 , checkpienum1.includes('π') , "3.141592653589793" )
    checkpienum1 = checkpienum1.includes('π')
   if(checkpienum1){
    number1 = 3.141592653589793
   }

   let checkpienum2 = document.getElementById('num2').value 
   checkpienum2 = checkpienum2.includes('π')
   if(checkpienum2){
    number2 = 3.141592653589793
   }

    if (operator == '+') {
        
        result = parseFloat(number1) + parseFloat(number2)
    }
    else if (operator == '-') {
        result = number1 - number2
    }
    else if (operator == 'x') {
        result = number1 * number2
    }
    else if (operator == '/') {
        result = number1 / number2
    }
    else if(operator == '√'){
        result = Math.sqrt(number1)
    }
    else if(operator == '%'){
        result = (number1 / 100) * number2
    }
    else if (operator == '^'){
        result = Math.pow(number1 , number2)
    }
    console.log(result)
    
    // result = Math.round(result)
    // console.log(result)

     document.getElementById('result').innerHTML=result





})


document.getElementById('pie1').addEventListener('click',(e)=>{
e.preventDefault()
document.getElementById('num1').value = 'π'
console.log('pie1 clicked')
})
document.getElementById('pie2').addEventListener('click',(e)=>{
e.preventDefault()
document.getElementById('num2').value = 'π'
console.log('pie2 clicked')
})
