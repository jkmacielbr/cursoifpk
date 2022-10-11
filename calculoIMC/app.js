function calcularImc(){
    let alturaRecebida = document.getElementById("altura").value;
    let pesoRecebido = document.getElementById("peso").value;
    let nomeRecebido = document.getElementById('nome').value;
    let resultado = pesoRecebido / (alturaRecebida * alturaRecebida);
    alert(nomeRecebido + " o calculo do seu IMC foi "+ resultado.toFixed(2));
    
    if (resultado < 18.5){
        alert("Abaixo do peso");
    } else if (resultado >= 18.6 && resultado <= 24.9){
        alert("Peso Normal");
    } else if (resultado >= 25 && resultado <= 29.9){
        alert("Sobrepeso");
    } else if (resultado >= 30.0 && resultado <= 34.9){
        alert("Obesidade grau I");
    } else if (resultado >= 35.0 && resultado <= 39.9){
        alert("Obesidade grau II");
    } else if (resultado >= 40.0){
        alert("Obesidade grau III");
    } else 
        alert("Verificar dados informado")

}