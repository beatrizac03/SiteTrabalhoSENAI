
function comprar(){
    let res = document.getElementById('result')
    let qtde = document.getElementById('num').value
    qtde = Number(qtde)
    let val_total
    val_total = Number(val_total)

    if(qtde == 1){
        res.innerHTML = ''
        res.innerHTML += `<p>Compra Efetuada! Você comprou ${qtde} ingresso</p></br>`
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p>Compra Efetuada! Você comprou ${qtde} ingressos</p></br>`
    }

    val_total = qtde * 150
    res.innerHTML += `<p class="detalhes-compra">Detalhes da Compra</p>`
    res.innerHTML += `<p class="det">Valor final: R$ ${val_total} </p>`

    if(qtde == 1){
        res.innerHTML += `<p class="det">Código ingresso: 21</p>`
    }
    else if (qtde ==2){
        res.innerHTML += `<p class="det">Código ingresso 1: 13</p>`
        res.innerHTML += `<p class="det">Código ingresso 2: 21</p>` 
    }
    else{
        res.innerHTML += ''
    }

    let dataHoraAtual = new Date();
    let data = dataHoraAtual.toLocaleDateString();
    let hora = dataHoraAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    res.innerHTML += `<p class="det">Data: ${data}  Hora: ${hora}</p>`
    
    num.value = '' //esvazia o input do number qnd clica em adc
    num.focus()  //nao precisa clicar no input dnv
} 