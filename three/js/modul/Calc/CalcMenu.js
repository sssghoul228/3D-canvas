function CalcMenu(){
    const inputA = document.getElementById('calc-a');
    const inputB = document.getElementById('calc-b');
    const inputD = document.getElementById('calc-d');
    
    function operandHandler(event) {
        const calc = new Calculator;
        const a = calc.getEntity(inputA.value);
        const b = calc.getEntity(inputB.value);
        const f = calc[event.target.dataset.operand](a, b);
        inputD.value = f.toString();
    }

    document.querySelectorAll('.operand').forEach(button => button.addEventListener('click', operandHandler));
}