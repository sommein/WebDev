class Calculator{
    constructor(preoperandText,curoperandText){
        this.preoperandText = preoperandText
        this.curoperandText = curoperandText
        this.clear()
    }

    clear(){
        this.preoperand = ''
        this.curoperand = ''
        this.opreation = ''
    }

    delete(){
        this.curoperand = this.curoperand.toString().slice(0,-1)
    }

    appendNum(number){
        if(number === '.' && this.curoperand.includes('.')) return
        this.curoperand = this.curoperand.toString()+number.toString()
    }

    chooseOpreation(opreation){
        if(this.curoperand==='') return
        if(this.curoperand!==''){
            this.compute()
        }
        this.opreation = opreation
        this.preoperand = this.curoperand
        this.curoperand = ''
    }

    compute(){
        let answer
        const prev = parseFloat(this.preoperand)
        const cur  = parseFloat(this.curoperand)
        if(isNaN(prev)||  isNaN(cur)) return
        switch(this.opreation){
            case '+':
                answer = prev+cur 
                break
            case '-':
                answer = prev-cur 
                break
            case '*':
                answer = prev*cur 
                break
            case '÷':
                answer = prev/cur 
                break

            default:
                return
        }
        this.curoperand = answer
        this.opreation = ''
        this.preoperand = ''
    }

    updateDisplay(){
        this.curoperandText.innerText = this.curoperand
        this.preoperandText.innerText = this.preoperand + this.opreation
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-opreation ]')
const equalButton = document.querySelector('[data-equal]')
const allclearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const preoperandText = document.querySelector('[data-pre-operand]')
const curoperandText = document.querySelector('[data-cur-operand]')



const calculator = new Calculator(preoperandText,curoperandText)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOpreation(button.innerText)
        calculator.updateDisplay()

    })
})

equalButton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})

allclearButton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button=>{
    calculator.delete()
    calculator.updateDisplay()
})


