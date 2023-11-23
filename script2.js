function calcular(){
    let valorunit = document.getElementById('numing').value
    let custo = document.getElementById('custoev').value
    let res = document.getElementById('b3')
    custo = Number(custo)
    ingresvend = Number(custo)

    let qtde = Math.ceil(custo / valorunit);

    if(qtde == 1){
        res.innerHTML = ''
        res.innerHTML += `<p class="texto">Você precisa vender ${qtde} ingresso para custear o evento.</p>`
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p class="texto">Você precisa vender ${qtde} ingressos para custear o evento.</p>`
    }

    valorunit.value = '' 
    custo.value = ''

}