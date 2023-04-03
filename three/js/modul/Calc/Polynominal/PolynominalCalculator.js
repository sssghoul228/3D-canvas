class PolynominalCalculator {
    polynominal(members) {
        return new Polynominal(members)
    }

    getMember(str) {
        if (str) {
            const arr = str.split('x');
            if (arr.length === 1) {
                return new Member(arr[0])
            }

            arr[0] = arr[0].replaceAll('*', '');
            arr[0] = arr[0].replaceAll('(', '');
            arr[0] = arr[0].replaceAll(')', '');
            arr[1] = arr[1].replaceAll('^', '');
            arr[1] = arr[1].replaceAll('(', '');
            arr[1] = arr[1].replaceAll(')', '');

            if (arr[0] === '-') arr[0] = -1;
            if (arr[0] === '') arr[0] = 1;
            if (arr[1] === '') arr[1] = 1;

            return new Member(arr[0] - 0, arr[1] - 0);

        }
        return new Member;
    }

    getPolynomial(str) {
        str = str.replace(/\s/g, "");
        if (str) {
            const arr = str.split('+');
            const arr2 = arr.map(elem => elem.split('-'));
            for (let i = 0; i < arr2.length; i++) {
                arr2[i] = arr2[i].map((elem, index) => index && elem ? `-${elem}` : elem);
            }
            const arr3 = arr2.reduce((s,arr) => s.concat(arr),[])
            return new Polynominal(arr3.map(elem => this.getMember(elem)));
        }
        return new Polynominal;
    }

    add(a, b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elA => {
            const member = b.poly.find(elB => elB.power === elA.power);
            if (member) {
                members.push(new Member(calc.add(elA.value, member.value), elA.power));
            } else {
                members.push(new Member(elA.value, elA.power));
            }
        });
        b.poly.forEach(elB => {
            if (!members.find(elem => elem.power === elB.power)) {
                members.push(new Member(elB.value, elB.power));
            }
        });
        return this.polynominal(members);
    }

    sub(a, b) {
        const calc = new Calculator;
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB =>
                elemB.power === elemA.power);
            if (member) {
                members.push(new Member(calc.sub(elemA.value, member.value), elemA.power));
            }
            else {
                members.push(new Member(elemA.value, elemA.power));
            }
        })

        b.poly.forEach(elemB => {
            if (!members.find(elem => elem.power === elemB.power)) {
                members.push(new Member(calc.prod(-1, elemB.value), elemB.power));
            }
        })
        return this.polynominal(members);
    }

    mult(a, b) {
        const calc = new Calculator;
        let polynominal = this.polynominal();
        a.poly.forEach(elA => {
            const members = []
            b.poly.forEach(elB => {
                members.push(new Member(calc.mult(elA.value, elB.value), elA.power + elB.power));
            })
            polynominal = this.add(polynominal, this.polynominal(members))
        })
        return polynominal;
}

}