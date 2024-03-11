let n = 87; 

let a = 0, b = 1, temp;

for (let i = 0; b <= n; i++) {
  if (b === n) {
    console.log(`${n} está na sequência de Fibo`);
    break;
  }

  temp = b;
  b = a + b;
  a = temp;

  if (b > n) {
    console.log(`${n} não está na sequência de Fibo`);
  }
}