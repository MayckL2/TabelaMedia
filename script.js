let table = document.querySelector("table")
let linhas = colunasTh = colunasTd = ""
let numCol = 2
let numRow = 1
let soma = media = 0
let nota1 = document.querySelector(".nota1")
let nota2 = document.querySelector(".nota2")
let nota3 = document.querySelector(".nota3")
let nota4 = document.querySelector(".nota4")
let trs= document.querySelectorAll("tr")

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
        <tr id="row1">
            <td><input type="text" value="Nome do Aluno"></td>
            <td><input onchange="calcMedia(1)" type="number"></td>
            <td><input onchange="calcMedia(1)" type="number"></td>
            ${colunasTd}
            <td class="media m1"><p>vazio</p></td>
            <td class="situ s1"></h2></td>
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
            <td><input onchange="calcMedia(${numRow})" type="number" value="0"></td>
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
        linhas += `<tr id="row${x+1}">
                        <td><input type="text" value="Jão"></td>
                        <td><input onchange="calcMedia(${x+1})" type="number"></td>
                        <td><input onchange="calcMedia(${x+1})" type="number"></td>
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
function calcMedia(e) {
    if(e == 1){
        let row = document.querySelectorAll("#row"+1+"input")
        
        for (let i = 0; i < row.length; i++) {
            soma += row[i].value
        }

    }
    
    media = soma / numRow

    document.title = soma
    document.querySelector(".media p").innerHTML = media
}