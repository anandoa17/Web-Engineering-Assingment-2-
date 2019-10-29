function currency() {
    var usd = document.getElementsByName("usd")[0].value;
    var eur = Number(usd) *0.90;
    var gbp = Number(usd) *0.77;
    document.getElementsByName("eur")[0].value = eur;
    document.getElementsByName("gbp")[0].value = gbp;
}
