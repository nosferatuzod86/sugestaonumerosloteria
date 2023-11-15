function calcularLoteria() {
    //var txtnum = window.document.getElementById('txtnumero')
    //var num =Number(txtnum.value)
    var res = window.document.getElementById('res')
    //res.innerHTML = `<p>${num}</p>`
    //var resultado = (num ** 2)
    //res.innerHTML = `<p> Valores da Tabuada do ${num}: </p>`
    res.innerHTML = `<p> Valores Sugeridos:</p>`
    for (var i = 1; i <= 6; i++) {
    var randomNumero = Math.floor((Math.random() * (100))+1);
    //console.log(randomNumero)
    //var resultado = (i*num);
    res.innerHTML += `<p>O número sugerido é: ${randomNumero}.</p>`
    }
}