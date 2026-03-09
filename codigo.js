const URL = "https://script.google.com/macros/s/AKfycbxsG9XD7O-iMlLZqfQ7AfDdtAyrONRxjx1xdvNfEGn6UUCei5s_Oc6QEIgYY50_2HgRMg/exec";

async function carregarTabela() {
    try {
        const resposta = await fetch(URL);
        const dados = await resposta.json();

        const tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        dados.forEach(linha => {
            const div = document.createElement("div");
            div.classList.add("table-row");

            div.innerHTML = `
                <div>${linha[0]}</div>
                <div>${linha[1]}</div>
                <div>${linha[2]}</div>
                <div>${linha[3]}</div>
            `;

            tabela.appendChild(div);
        });

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

window.onload = carregarTabela;