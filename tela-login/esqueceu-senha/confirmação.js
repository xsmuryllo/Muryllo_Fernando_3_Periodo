function recuperar() {
    var email = document.getElementById("e-mail").value;
    var numero = document.getElementById("numero").value;

    if (email === "muryllofernando067@gmail.com" && numero === "62995498684") {
        alert("sua senha será redefinida, peço para verificar o seu whatsapp");
        window.location.href = "./pagina-sucesso.html";
    } else {
        alert("Sua recuperação de senha falhou. Verifique suas credenciais.");
    }
}
