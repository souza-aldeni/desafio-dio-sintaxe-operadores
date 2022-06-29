function somar(a,b){
    if (a == "" || b == ""){
        alert('Dados faltando, tente novamente.')
    }else {
        total = Number(a)+Number(b);
        var result = (a == b ? `Os numeros ${a} e ${b} são iguais.` : `Os numeros ${a} e ${b} são diferentes.`);
        if(total < 10){
            result += " Sua soma é " + total + " que é menor que 10 e menor que 20"
        }else if(total > 20){
            result += " Sua soma é " + total + " que é maior que 10 e maior que 20"
        } else {
            result += " Sua soma é " + total + " que é >= 10 e <= 20"
        }
        document.getElementById("resultado").innerText = result;
        document.getElementById('txtnum1').value ="";
        document.getElementById('txtnum2').value ="";
    }

}