let table = document.querySelector("table")
let linhas = colunasTh = colunasTd = ""
let numCol = 2
let numRow = 1
let soma = media = 0
let trs = document.querySelectorAll("tr")

// renderiza tabela
function criaTable() {
    table.innerHTML = `
        <tr>
            <th>Aluno</th>
            <th class="quantNotas">Nota 1</th>
            <th class="quantNotas">Nota 2</th>
            ${colunasTh}
            <th>Media</th>
            <th>Situação</th>
        </tr>
        <tr id="row0">
            <td><input type="text" placeholder="Nome do Aluno"></td>
            <td><input onchange="calcMedia()" type="number" class="n1"></td>
            <td><input onchange="calcMedia()" type="number" class="n2"></td>
            ${colunasTd}
            <td class="media m1"><p>vazio</p></td>
            <td class="situ s1"></td>
        </tr>    
        ${linhas}
        `
}

// adiciona linhas
function adRow() {
    if (numRow != 10) {
        numRow++
    } else {
        alert("Numero máximo de alunos atingido!")
    }
    rendLinha()
}

// adiciona colunas
function adColumn() {
    if (numCol < 6) {
        numCol++

        colunasTh += "<th class='quantNotas'>Nota " + numCol + "</th>"

        colunasTd += `
            <td><input onchange="calcMedia()" type="number" class="n${numCol}"></td>
        `
    } else {
        alert("Numero máximo de colunas atingida!")
    }


    rendLinha()
    criaTable()
}

// renderiza linhas
function rendLinha() {
    linhas = ""

    for (let x = 1; x < numRow; x++) {
        linhas += `<tr id="row${x}">
                        <td><input type="text" placeholder="Nome do Aluno"></td>
                        <td><input onchange="calcMedia()" type="number" class="n1"></td>
                        <td><input onchange="calcMedia()" type="number" class="n2"></td>
                        ${colunasTd}
                        <td class="media m${x + 1}"><p>vazio</p></td>
                        <td class="situ s${x + 1}"></h2></td>
                    </tr>
                    `
    }

    criaTable()
    return linhas
}

// calcular media
function calcMedia() {
    // os loop precisam começar do 1 porque se tentar extrair valor de um lugar que nao existe dara erro e todo o resto nao funcionada
    for (let i = 0; i < numRow; i++) {
        // as classes das notas começao do n1, por isso precisam começar do x = 1
        for (let x = 1; x < numCol + 1; x++) {
            // soma = parseInt(row[i].value)
            soma += parseInt(document.querySelector(`#row${i} .n${x}`).value)
        }

        if (isNaN(document.querySelector(`.m${i + 1} p`).innerHTML = soma / numCol)) {
            document.querySelector(`.m${i + 1} p`).innerHTML = "calculando..."
        } else {
            if ((document.querySelector(`.m${i + 1} p`).innerHTML = soma / numCol) > 100) {
                alert("Alguma das notas são maiores do que 100, revise as notas!")
            } else {
                document.querySelector(`.m${i + 1} p`).innerHTML = soma / numCol

                if ((soma / numCol) >= 70) {
                    document.querySelector(`.s${i + 1}`).innerHTML = `
                <h2 style="color: greenyellow">APROVADO</h2>
            `
                } else if ((soma / numCol) <= 69 && (soma / numCol) >= 50) {
                    document.querySelector(`.s${i + 1}`).innerHTML = `
                <h2 style="color: yellow">RECUPERAÇÃO</h2>
            `
                } else {
                    document.querySelector(`.s${i + 1}`).innerHTML = `
                <h2 style="color: red">REPROVADO</h2>
            `
                }
            }
        }


        soma = 0
    }


}