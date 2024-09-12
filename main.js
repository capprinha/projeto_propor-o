const form = document.getElementById("form")
const nomeOperador = document.getElementById("nomeOperador")
const turno = document.getElementById("turno")
const valorAdesivo = document.getElementById("valorAdesivo");
const valorCatalizador = document.getElementById("valorCatalizador");
let linhas =""
let resultado


//função principal;
form.addEventListener("submit", function(e){
    e.preventDefault();
    //const arrayObj = [{nome:nomeOperador.value, turno:turno.value, adeviso:valorAdesivo.value, catalizador:valorCatalizador.value}];
    //console.log(arrayObj);
    fazerProporcao();
    atualizaTabela();
    printTabela();
})

//fazer a proporção e verificar o padrao;
function fazerProporcao(){
    resultado = valorAdesivo.value / valorCatalizador.value;
    
    if(resultado >= 0.66){
        return resultado, console.log("esta alto");

    }
    else if ( resultado <= 0.65){
        return resultado, console.log("esta baixo");
    }
    else{
        return resultado, console.log("esta bom");
    }
    
};

// função para atualizar tabela ksksks
function atualizaTabela(){
    let linha = "<tr>";
    
    linha += `<td>${nomeOperador.value}</td>`;
    linha += `<td>${turno.value}</td>`;
    linha += `<td>${valorAdesivo.value}</td>`;
    linha += `<td>${valorCatalizador.value}</td>`;
    linha += `<td>${resultado}</td>`;
    linha += `</tr>`;
    linhas += linha;
}

function printTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    const corpoParagrafo = document.getElementById("resultado")
    if(resultado >= 0.66){
        corpoParagrafo.innerHTML = `<p>A proporção: ${resultado}, esta alta!!</p>`
    }
    else if(resultado <= 0.65){
        corpoParagrafo.innerHTML = `<p>A proporção: ${resultado}, esta baixa!!</p>`
    }
    else{
        corpoParagrafo.innerHTML = `<p>A proporção: ${resultado}, esta boa!!</p>`
    }
}