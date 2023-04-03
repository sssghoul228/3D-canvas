class Polynominal {
    constructor(poly = []){
        this.poly = poly
        this.poly.sort((a, b) => b.power - a.power)
    }
    getValue(x) {
        const calc = new Calculator;
        let length = 0;
        return this.poly.reduce((s, elem) => calc.add(s, calc.prod(elem.value, calc.pow(x, elem.power))), calc.zero(length));
    }

    toString() {
        if (this.poly.length) {
            return this.poly.map(
                (el, index) => `${el.value > 0 && index ? '+' : ''}${el.toString()}`).join('');
        }
        return 0;
    }
}