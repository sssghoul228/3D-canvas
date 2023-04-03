function polyCalcMenu() {
    const inputAp = document.getElementById('polya');
    const inputBp = document.getElementById('polyb');
    const inputCp = document.getElementById('polyc');
    const inputX = document.getElementById('polyx');
    const inputRes = document.getElementById('result')

    function operandHandler(event) {
        const calc = new PolynominalCalculator;
        const a = calc.getPolynomial(inputAp.value);
        const b = calc.getPolynomial(inputBp.value);
        const c = calc[event.target.dataset.operand](a, b);
        inputCp.value = c.toString();
        console.log(c);
    }

    function getPointValue() {
        const xCalc = new Calculator;
        const calc = new PolynominalCalculator;
        const f = calc.getPolynomial(inputCp.value);
        const x = xCalc.getEntity(inputX.value);

        inputRes.value = f.getValue(x).toString();
    }

    document.querySelectorAll('.polyOperand').forEach(button => button.addEventListener('click', operandHandler));
    document.getElementById('polyResult').addEventListener('click', getPointValue);
}