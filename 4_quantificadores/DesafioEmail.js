const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`

// const regex = /\w{1,}@\w{1,}\.\w{1,}(\.\w{1,}){0,}/g
// const regex = /\w+@\w+\.\w+(\.\w+)*/g
const regex = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g

console.log(texto.match(regex));