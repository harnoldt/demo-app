
let i: number = parseInt("42");
let d: number = parseFloat("0.815");

if (isNaN('ein String')){
    console.debug('Ein String ist keine Zahl!');
}

let name1: string = 'Max';
let name2: string = "Max";
let name3: string = `
${name2} Mustermann` ;

let name4 = name2 + ' Muster';
console.debug(name3);
console.debug(name4);

let firstName = null;
if (!firstName) {
    console.debug('firstName is falsy');
}