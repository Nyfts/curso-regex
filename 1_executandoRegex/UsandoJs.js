const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');

console.log('Métodos do RegExp');

// Confere se no texto existe o padrão
console.log(regexNove.test(text));

// Encontra o padrão no texto
console.log(regexNove.exec(text));

const regexLetras = /[a-f]/g;

console.log('Métodos da String');

// Retorna array com todos o matches da string
console.log(text.match(regexLetras));

// Índice do primeiro elemento encontrado apenas
console.log(text.search(regexLetras));

// Substitui tudo que acha pelo regex e substitui
console.log(text.replace(regexLetras, 'Achei'));

// Separa o texto a partir do que encontrar
console.log(text.split(regexLetras));