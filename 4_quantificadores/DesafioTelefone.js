const texto = `Lista telefônica:
- (11) 98756-1212
- (19) 9436-1546
-98765-4321 ...`;

const regex = /(\(\d{2}\)\s)?\d{4,5}-\d{4}/g;

console.log(texto.match(regex));