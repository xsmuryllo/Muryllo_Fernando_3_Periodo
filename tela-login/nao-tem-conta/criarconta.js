function naotemconta() {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "Muryllo" && numero === "62995498684" && email === "muryllofernando067@gmail.com" && senha === "123") {
        alert("senha criada com sucesso!");
        window.location.href = "/!Meu site/tela-login/index.html";
    } else {
        alert("Sua conta não foi criada. Por favor, verifique se preencheu todas as informações.");
    }
}