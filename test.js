const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

describe ("dollarToYen", () => {
    test("One dollar should be 115.37 yens", () => {
        const result = fromDollarToYen(1);
        expect(result).toBe(115.37);
    })

    test("Five dollars should be 575 yens", () => {
        const result = fromDollarToYen(5);
        expect(result).toBe(576.85);
    })
    
})

describe ("YenToPound", () => {
    test("One yen should be 0.0064 pound", () => {
        const result = fromYenToPound(1);
        expect(result).toBe(0.0064);
    })

    test("100 yen should be 0.64 pound", () => {
        const result = fromYenToPound(100);
        expect(result).toBe(0.64);
    })
    
})