let guitar = { manufacturer: 'Ibanez', type : 'Jem 777', strings : 6 };
/* 
with deconstructing objects with REST properties we can deconstructing objects or arrays in simple types
 */
// one way that we could deconstruct this is by using the following
const manufacturer = guitar.manufacturer;
const type = guitar.type;
const strings = guitar.strings;
//it's not very elegant, and there's a lot of repetition
let { manufacturer, type, strings } = guitar;
//if you want rename property for some reason
let {manufacturer: maker, type, strings} = guitar;
/*
when you take a variable number of items
you are going to be bundled into a REST varibale
*/
let {manufacturer, ...details} = guitar;

/*
In arrays
*/
const instruments = ['Guitar','Violin','Oboe','Drums'];
const gtr = instruments[0];
const violin = instruments[1];
const oboe = instruments[2];
const drums = instruments[3];
//more concise
let [gtr, violin, oboe, drums] = instruments;
let[gtr, ...instrumentslice] = instruments;
