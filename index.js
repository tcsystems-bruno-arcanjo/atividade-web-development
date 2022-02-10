window.onload = function() {
  document.querySelector("#btn-calcular").addEventListener("click", function() {
    var peso = parseInt(document.querySelector("#peso").value);
    var altura = parseInt(document.querySelector("#altura").value);

    altura = altura / 100;
    var resultado = (peso / (altura * altura));

    document.querySelector("#resultado").innerHTML = resultado.toFixed(2);
  });
}