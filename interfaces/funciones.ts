(() => {

    interface addTwoNumbers{
        (a:number, b:number): number
    }

    let addNumberFunctions: addTwoNumbers;

    addNumberFunctions = (a:number, b:number) => {
        return a+b;
    }
})()