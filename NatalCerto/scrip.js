function entrar(){

    var nome = document.getElementById('nome')
    var res = document.getElementById('res')

    if(nome.value.length == 0){
        window.alert("Nome vazio! Digite seu nome por favor...")
        //res.innerText = ''
    } else if (nome.value !== 'Deise Cristiane Daniel Campos'){
        window.alert("Nome incorreto. Verifique e tente novamente")
        //res.innerText = ''
    } else {
        res.innerText = 'Digite um ano entre 2013~2022: '
        var ano = document.createElement('input')
        ano.setAttribute('id','ano')
        ano.setAttribute('size','4')
        res.appendChild(ano)

        var btnano = document.createElement('input')
        btnano.setAttribute('type','button')
        btnano.setAttribute("value","Conferir")
        btnano.setAttribute('onclick', 'ano()')
        res.appendChild(btnano)


    }
}



function ano(){
    
    var ano = document.getElementById('ano')
    var imgano = document.getElementById('imgano')
    var imgmsg = document.getElementById('imgmsg')
    var casar = document.getElementById('2023')
    var a = Number(ano.value)
    
    imgano.innerText = ''
    imgmsg.innerText = ''
    casar.innerText = ''
    
    if (a < 2013 || a > 2022){
        window.alert("Ano Inválido! Favor conferir e tentar novamente")
    } else 

    if (a == 2013){             
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2013.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Sim, foto antiga e aleatória mesmo, mas representa a quantidade de história que temos juntos, momentos, alegrias e companheirismo. Foto antiga mas sim, já era muito feliz ao seu lado'
    } else if (a == 2014){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2014.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Nosso primeiro natal em FAMÍLIA, onde erámos tão jovens ainda,poucas preocupações e poucos planos ainda, mas, mais um momento feliz com você.'
    } else if (a == 2015){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2015.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Quando fui chamado para ser padrinho do casamento eu lembro que ainda éramos um pouco de incerteza, sua família meio no "Vai que não da certo, colocar o Zé é um risco né", nem tirava a razão deles kkkk mas GRAÇAS A DEUS não era um incerteza e hoje tenho certeza que deu certo SIM '
    }  else if (a == 2016){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2016.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Olhar pra essa foto faz lembra que você fez parte de um grande ciclo da minha vida. Amadurecemos tanto, mudamos tanto, mas ter essas lembranças só me faz sorrir e ser mais feliz e completo hoje '
    } else if (a == 2017){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2017.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Momentos..! Todo ponto alto da minha vida você esteve comigo. Todo momento de alegria e felicidade eu sou grato por ter você do meu lado'
    } else if (a == 2018){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2018.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Você já faz parte não só da minha vida, você não imagina o quão importante você é para muitas pessoas. Você é uma pessoa especial e te conhecer é uma benção na vida de qualquer pessoa'
    } else if (a == 2019){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2019.jpeg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Siiiiiiiiiim! Vai ter foto zuada aqui também! Só de ter você presente ao meu lado já me sinto mais feliz e alegre. Desejo poder ter o resto da minha vida momentos como este'
    } else if (a == 2020){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2020.jpg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Como você sempre diz "Quando você casa, a família vai junto", e a sua não foi diferente né haha. Mas é a família que nos molda e nos ajuda quando precisamos, e momentos como esse faz pensar realmente em tudo que quero com você. Amo muito você e pra sua família também sobra um amorzinho de leve ^^"  '
    } else if (a == 2021){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2021.jpeg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Éer amor, já rodamos e passamos por muito viu. Mas sempre lindos em todas situações né?! Formamos um casal e tanto haha'
    } else if (a == 2022){       
        var foto = document.createElement('img')
        foto.setAttribute('src','img/2022.jpeg')
        imgano.appendChild(foto)
        imgmsg.innerText = 'Quem diria... 9 anos !! Quanto mudamos né?! Passamos por tanta coisa, tanta história, emoções, uma vida passada junto. 2022 foi um carrossel de emoções... Não me orgulho de muita coisa que fiz e/ou deixei de fazer. Sofri muito, passamos por muitos perrengues, mas crescemos e amadurecemos muito. Dou graças a Deus por hoje estar junto de você. Você é meu porto seguro, minha conselheira, minha amiga, companheira, minha maluca, meu amor, minha paixão, meu sonho !!  '

        var btncasar = document.createElement('input')
        btncasar.setAttribute('type','button')
        btncasar.setAttribute("value","2023 >>>")
        btncasar.setAttribute('onclick', 'casar()')
        casar.appendChild(btncasar)
    }



} 

function casar(){
    var casar = document.getElementById('2023')

    imgano.innerText = ''

    var foto = document.createElement('img')
    foto.setAttribute('src','img/2023.jpeg')
    imgano.appendChild(foto)
    imgmsg.innerText = 'Não fique esperando o futuro para ser feliz, faça do presente a sua alegria. A felicidade consiste em preparar o futuro, pensando no presente e se desapegando do passado. A verdade é o único caminho para um futuro feliz e eterno. Seja feliz hoje, amanhã e no futuro!'

    casar.innerText = ''
    

    var btnperg = document.createElement('input')
    btnperg.setAttribute('type','button')
    btnperg.setAttribute("value",'Então...')
    btnperg.setAttribute('onclick','pergunta()')
    casar.appendChild(btnperg)

}

function pergunta(){

    imgano.innerText = ''

    var casar = document.getElementById('2023')

    var foto = document.createElement('img')
    foto.setAttribute('src','img/file.jpeg')
    imgano.appendChild(foto)
    imgmsg.innerText = 'Você quer casar comigo?'

    casar.innerText = ''

    var sim = document.createElement('input')
    sim.setAttribute('type','button')
    sim.setAttribute("value",'Sim')
    sim.setAttribute('onclick','sim()')
    casar.appendChild(sim)
    var nao = document.createElement('input')
    nao.setAttribute('type','button')
    nao.setAttribute("value",'Não')
    nao.setAttribute('onclick','nao()')
    casar.appendChild(nao)
    
}

function sim(){
    var titulo = document.getElementById('titulo')

    var casar = document.getElementById('2023')
    casar.innerText = ''
    imgano.innerText = ''

    var foto = document.createElement('img')
    foto.setAttribute('src','img/sim.jpg')
    imgano.appendChild(foto)
    imgmsg.innerText = 's2 s2 s2 AEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE s2 s2 s2'
    titulo.innerText = 'VAMOS CASAAAAAAAAAAAAR õ/'

}

function nao(){
    var casar = document.getElementById('2023')
    casar.innerText = ''
    imgano.innerText = ''
    imgmsg.innerText = 'Acho que você clicou errado... Tente novamente u.u'
}