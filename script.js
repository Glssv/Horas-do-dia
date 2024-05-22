function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = "img/dia.png"
        document.body.style.backgroundColor = "#99bcd4"
    } else if (hora >= 12 && hora < 18) {
        img.src = "img/tarde.png";
        document.body.style.backgroundColor = "#c1ba9e"
    } else if (hora >= 18 && hora < 24) {
        img.src = "img/noite.png"
        document.body.style.backgroundColor = "#464646"
    } else if (hora >= 0 && hora < 5) {
        img.src = "img/madrugada.png"
        document.body.style.backgroundColor = "#433e33"
    }
}
