function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "Muryllo" && senha === "123") {
        alert("Login realizado com sucesso!");
        window.location.href = "/!Meu site/home/index.html";
    } else {
        alert("Login falhou. Verifique suas credenciais.");
    }
}
