const obj = { a: 1, b: 2, c: 3, soma(){ return a+b+c} }
//tranformar em JSON
console.log(JSON.stringify(obj))
//transformar em objeto
console.log(JSON.parse(`{"a": 1, "b": 2, "c": 3}`))
//formatos válidos
console.log(JSON.parse(`{"a": 1.5, "b": "string", "c": true, "d": {}, "e": [] }`))