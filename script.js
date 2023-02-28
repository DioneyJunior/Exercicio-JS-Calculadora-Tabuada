const output = document.getElementById("output");

function tabuada() {
  let n = prompt("Digite um número");
  n = parseFloat(n);
  let msg = "";
  for (let i = 0; i <= 1000; i++) {
    msg += `${i} x ${n} = ${i * n} <br>`;
  }
  output.innerHTML = msg;
}
function Limpar() {
  output.innerHTML = "";
}