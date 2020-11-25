for (let letra of "Eldo Lopes") {
    console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];
for (let indice in assuntosEcma) {
    console.log(indice);
}
for (let valor of assuntosEcma) {
    console.log(valor);
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }],
]);
for (let assunto of assuntosMap) {
    console.log(assunto);
}
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}
for (let valor of assuntosMap.values()) {
    console.log(valor);
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}
