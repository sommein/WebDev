

const screen = document.querySelector('[screen]')
const dataOp = document.querySelectorAll('[data-operation]')
const dataCls = document.querySelector('[data-clear]')
const dataEq = document.querySelector('[data-equal]')
const dataNum = document.querySelectorAll('[data-number]')
let Op
let num
let ans

class Calculator{
    constructor(){
        this.clear()
    }

    clear(){
        screen.value = ''
    }

    updateDisplay(button){
        screen.value+=button
    }      

    Operation(button){       
        Op = button
        num =  parseFloat(screen.value)
    }

    Equal(){
        switch(Op){
            case "+":
                ans=num+parseFloat(screen.value)
                screen.value=ans
                break;
            
            case "-":
                ans=num-parseFloat(screen.value)
                screen.value=ans
                break;

            case "*":
                ans=num*parseFloat(screen.value)
                screen.value=ans
                break;

            case "/":
                ans=num/parseFloat(screen.value)
                screen.value=ans
                break;

        }
    }



}

const calculator = new Calculator()

dataNum.forEach(btn=>{
    btn.addEventListener('click',()=>{
        calculator.updateDisplay(btn.value)
    })
})

dataOp.forEach(btn=>{
    btn.addEventListener('click',()=>{
        calculator.Operation(btn.value)
        calculator.clear() 
    })
})

dataEq.addEventListener('click',()=>{
    calculator.Equal()
})

dataCls.addEventListener('click',()=>{
    calculator.clear()
})



