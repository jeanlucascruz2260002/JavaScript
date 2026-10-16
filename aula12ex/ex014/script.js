function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'pexels-manha.jpg'
        document.body.style.background = 'rgb(255, 204, 105)'
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'pexels-tarde.jpg'
        document.body.style.background = 'rgb(253, 224, 88)'
    }else {
        //Boa noite!
        img.src = 'pexels-noite.jpg'
        document.body.style.background = 'rgb(7, 39, 64)'
    }
}