class Complex {
    constructor (re = 0 , im = 0){
        this.re = re;
        this.im = im;
    }

    // i3
    // -i3
    //2+i3
    toString() {
        if (this.re === 0 && this.im === 0) return '0'; //2
        if (this.im === 0) return `${this.re}`;
        if (this.re === 0)
            return (this.im > 0) ? `${this.im}` : `- ${this.im}i`;
        return (this.im > 0) ? 
            `${this.re}+i${this.im}`:
            `${this.re}-i${-this.im}`;


    }

    module(a) {
        return (Math.sqrt(a.re ** 2 + a.im **2));
    }
}


// дописать метод который позволяет написать модуль числа 