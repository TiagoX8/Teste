let Stringini = "Teste";
let stringInvert = "";

for (let i = Stringini.length - 1; i >= 0; i--) {
  stringInvert += Stringini[i];
}

console.log(`String Invert: ${stringInvert}`);