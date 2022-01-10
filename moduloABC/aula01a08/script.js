function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // hora = 13
    msg.innerHTML = `Agora sao ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        document.body.style.background = '#e2cd95'
        msg2.innerHTML = `Olar mundo bom dia!`;
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'https://images.pexels.com/photos/858241/pexels-photo-858241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = `Olar mundo boa tarde!`;
    } else {
        //Boa noite
        img.src = 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        document.body.style.background = '#515154'
        msg2.innerHTML = `Olar mundo boa noite!`;
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        alert('Verifique o ano!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        // res.innerHTML = `a idade eh: ${idade}`;
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
                img.setAttribute('with', '250px')
                img.setAttribute('height','250px')

            }
            else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','https://images.pexels.com/photos/7692461/pexels-photo-7692461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')


            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/6338279/pexels-photo-6338279.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')

            } else {
                //Senhor
            }

        } else if (fsex[1].checked) {
            genero = 'feminino'
        }
        //  res.style.textAlign = 'center'
        res.innerHTML = `Genero ${genero}, ${idade} anos.`;
        res.appendChild(img)

    }

}