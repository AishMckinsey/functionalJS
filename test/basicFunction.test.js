const upperCaser = require("../basicFunction");

describe('upperCaser', ()=>{
    it('Should return sentence with upper case letters', ()=>{
        const sentence = upperCaser("Helllo this is me");
        expect(sentence).toBe("HELLLO THIS IS ME");
    });
    it('Should return Invalid Input', ()=>{
        const sentence = upperCaser(1233);
        expect(sentence).toBe("Invalid Input");
    });
    it('Should return empty string', ()=>{
        const sentence = upperCaser('');
        expect(sentence).toBe("");
    });
    it('Should return sentence with upper case letters as input is capital', ()=>{
        const sentence = upperCaser('ALL ARE CAPITAL STAYS CAPITAL');
        expect(sentence).toBe('ALL ARE CAPITAL STAYS CAPITAL');
    });
});