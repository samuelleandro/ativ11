function mostrarNome () {
    let ptext = document.createElement ("p");
    let seunome = document.querySelector ("#nome");
    let suaidade = document.querySelector ("#idade")
    let novotxt = document.createTextNode (`Seja bem vindo, conforme as informações acima seu nome é ${seunome.value} e você tem ${suaidade.value} anos. `);

    ptext.appendChild(novotxt);
    document.body.appendChild(ptext);
}

let botao = document.querySelector ("#botao");
botao.onclick = mostrarNome